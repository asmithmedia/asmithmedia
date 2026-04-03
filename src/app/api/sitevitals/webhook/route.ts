import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { Resend } from "resend";

// Plan mapping: Stripe Price ID => plan name.
const PLAN_MAP: Record<string, string> = {
  [process.env.SITEVITALS_PRICE_SINGLE || "price_1THUgQHSMVzgSAR2JJMvlRnW"]: "single",
  [process.env.SITEVITALS_PRICE_UNLIMITED || "price_1THUgtHSMVzgSAR2YBvkgauw"]: "unlimited",
};

const PRO_ZIP_URL = "https://asmith.media/sitevitals/downloads/sitevitals-health-monitor-pro.zip";

// ---------------------------------------------------------------------------
// Stripe signature verification
// ---------------------------------------------------------------------------

function verifyStripeSignature(
  payload: string,
  sigHeader: string,
  secret: string
): Record<string, unknown> | null {
  const elements: Record<string, string[]> = {};
  for (const part of sigHeader.split(",")) {
    const [key, ...rest] = part.split("=");
    if (key && rest.length) {
      const k = key.trim();
      if (!elements[k]) elements[k] = [];
      elements[k].push(rest.join("=").trim());
    }
  }

  const timestamp = elements["t"]?.[0];
  const signatures = elements["v1"] || [];

  if (!timestamp || signatures.length === 0) return null;

  // Reject if older than 5 minutes.
  if (Math.abs(Date.now() / 1000 - parseInt(timestamp, 10)) > 300) return null;

  const signedPayload = `${timestamp}.${payload}`;
  const expectedSig = crypto
    .createHmac("sha256", secret)
    .update(signedPayload)
    .digest("hex");

  const valid = signatures.some(
    (sig) => crypto.timingSafeEqual(Buffer.from(expectedSig), Buffer.from(sig))
  );

  if (!valid) return null;
  return JSON.parse(payload);
}

// ---------------------------------------------------------------------------
// Ed25519 license key generation
// ---------------------------------------------------------------------------

function generateLicenseKey(
  privateKeyHex: string,
  email: string,
  plan: string,
  domain: string,
  expires: string
): string | null {
  try {
    const payload = {
      email,
      plan,
      domain: domain || "*",
      created: new Date().toISOString().slice(0, 10),
      expires,
      version: "1",
    };

    const payloadJson = JSON.stringify(payload);
    const privateKeyBuffer = Buffer.from(privateKeyHex, "hex");

    // Node.js crypto expects the key wrapped in PKCS8 for Ed25519.
    // The PHP sodium key is 64 bytes (seed + public). The seed is the first 32 bytes.
    const seed = privateKeyBuffer.subarray(0, 32);
    const keyObject = crypto.createPrivateKey({
      key: Buffer.concat([
        // Ed25519 PKCS8 prefix
        Buffer.from("302e020100300506032b657004220420", "hex"),
        seed,
      ]),
      format: "der",
      type: "pkcs8",
    });

    const signature = crypto.sign(null, Buffer.from(payloadJson), keyObject);

    // Format: base64(payload).base64(signature) — matches PHP output
    return (
      Buffer.from(payloadJson).toString("base64") +
      "." +
      signature.toString("base64")
    );
  } catch (err) {
    console.error("License generation failed:", err);
    return null;
  }
}

// ---------------------------------------------------------------------------
// License delivery email
// ---------------------------------------------------------------------------

function buildLicenseEmailHtml(
  licenseKey: string,
  planLabel: string,
  expires: string,
  downloadUrl: string
): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">

<tr><td style="background:#1e293b;padding:24px 32px;text-align:center;">
    <h1 style="color:#ffffff;margin:0;font-size:22px;">Welcome to SiteVitals Pro!</h1>
</td></tr>

<tr><td style="padding:32px;">
    <p style="font-size:16px;color:#1e293b;margin:0 0 16px;">Thank you for your purchase! Here is everything you need to get started.</p>

    <h2 style="font-size:16px;color:#1e293b;margin:24px 0 8px;">Your License Key</h2>
    <div style="background:#f1f5f9;border:2px dashed #cbd5e1;border-radius:8px;padding:16px;font-family:monospace;font-size:13px;word-break:break-all;color:#334155;">
        ${licenseKey}
    </div>
    <p style="font-size:13px;color:#6b7280;margin:8px 0 0;">Plan: <strong>${planLabel}</strong> | Expires: <strong>${expires}</strong></p>

    <h2 style="font-size:16px;color:#1e293b;margin:24px 0 8px;">Download Pro Plugin</h2>
    <p style="margin:0 0 16px;">
        <a href="${downloadUrl}" style="display:inline-block;padding:12px 24px;background:#3b82f6;color:#ffffff;text-decoration:none;border-radius:6px;font-weight:bold;font-size:14px;">
            Download sitevitals-health-monitor-pro.zip
        </a>
    </p>

    <h2 style="font-size:16px;color:#1e293b;margin:24px 0 8px;">Installation Steps</h2>
    <ol style="color:#475569;font-size:14px;line-height:1.8;padding-left:20px;">
        <li>Install the <strong>free SiteVitals Health Monitor</strong> plugin from WordPress.org (if not already installed).</li>
        <li>Go to <strong>Plugins &gt; Add New &gt; Upload Plugin</strong> in your WordPress admin.</li>
        <li>Upload the Pro zip file and activate it.</li>
        <li>Go to <strong>SiteVitals &gt; Settings &gt; Pro License</strong>.</li>
        <li>Paste your license key and click <strong>Activate</strong>.</li>
    </ol>
</td></tr>

<tr><td style="padding:16px 32px;background:#f8fafc;text-align:center;border-top:1px solid #e5e7eb;">
    <p style="color:#9ca3af;font-size:12px;margin:0;">
        Need help? Contact <a href="mailto:sarah@asmith.media" style="color:#3b82f6;">sarah@asmith.media</a>
    </p>
    <p style="color:#9ca3af;font-size:12px;margin:4px 0 0;">
        &copy; ${new Date().getFullYear()} SiteVitals. All rights reserved.
    </p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// Webhook handler
// ---------------------------------------------------------------------------

export async function POST(req: NextRequest) {
  const webhookSecret = process.env.SITEVITALS_STRIPE_WEBHOOK_SECRET;
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const privateKeyHex = process.env.SITEVITALS_ED25519_PRIVATE_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!webhookSecret || !stripeKey || !privateKeyHex || !resendApiKey) {
    console.error("SiteVitals webhook: missing env vars");
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const payload = await req.text();
  const sigHeader = req.headers.get("stripe-signature") || "";

  // Verify signature.
  const event = verifyStripeSignature(payload, sigHeader, webhookSecret);

  if (!event) {
    console.error("SiteVitals webhook: invalid signature");
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Only process checkout.session.completed.
  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = (event as Record<string, unknown>).data as Record<string, unknown>;
  const sessionObj = session.object as Record<string, unknown>;

  const customerDetails = sessionObj.customer_details as Record<string, string> | undefined;
  const customerEmail =
    customerDetails?.email ||
    (sessionObj.customer_email as string) ||
    "";

  if (!customerEmail) {
    console.error("SiteVitals webhook: no customer email");
    return NextResponse.json({ error: "No email" }, { status: 400 });
  }

  // Get price ID from line items.
  let plan = "single";
  const sessionId = sessionObj.id as string;

  if (sessionId) {
    const lineItemsRes = await fetch(
      `https://api.stripe.com/v1/checkout/sessions/${sessionId}/line_items`,
      {
        headers: { Authorization: `Bearer ${stripeKey}` },
      }
    );

    if (lineItemsRes.ok) {
      const lineItems = await lineItemsRes.json();
      const priceId = lineItems?.data?.[0]?.price?.id;
      if (priceId && PLAN_MAP[priceId]) {
        plan = PLAN_MAP[priceId];
      }
    }
  }

  // Generate license key.
  const domain = plan === "unlimited" ? "*" : "";
  const expiresDate = new Date();
  expiresDate.setFullYear(expiresDate.getFullYear() + 1);
  const expires = expiresDate.toISOString().slice(0, 10);

  const licenseKey = generateLicenseKey(
    privateKeyHex,
    customerEmail,
    plan,
    domain,
    expires
  );

  if (!licenseKey) {
    console.error(`SiteVitals webhook: license generation failed for ${customerEmail}`);
    return NextResponse.json({ error: "License generation failed" }, { status: 500 });
  }

  // Send delivery email via Resend.
  const resend = new Resend(resendApiKey);
  const planLabel = plan.charAt(0).toUpperCase() + plan.slice(1);

  try {
    await resend.emails.send({
      from: "SiteVitals <noreply@asmith.media>",
      to: customerEmail,
      subject: `Your SiteVitals Pro License Key (${planLabel})`,
      html: buildLicenseEmailHtml(licenseKey, planLabel, expires, PRO_ZIP_URL),
    });

    console.log(`SiteVitals: license delivered to ${customerEmail} (plan: ${plan})`);
  } catch (err) {
    console.error(`SiteVitals: email failed for ${customerEmail}`, err);
  }

  return NextResponse.json({ received: true });
}
