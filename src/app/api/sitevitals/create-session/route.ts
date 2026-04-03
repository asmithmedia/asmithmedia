import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const PRICES: Record<string, string> = {
  single: (process.env.SITEVITALS_PRICE_SINGLE || "price_1THUgQHSMVzgSAR2JJMvlRnW").trim(),
  unlimited: (process.env.SITEVITALS_PRICE_UNLIMITED || "price_1THUgtHSMVzgSAR2YBvkgauw").trim(),
};

const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://asmith.media").trim();

export async function GET(req: NextRequest) {
  const plan = req.nextUrl.searchParams.get("plan") || "";
  const priceId = PRICES[plan];

  if (!priceId) {
    return NextResponse.json(
      { error: "Invalid plan. Use ?plan=single or ?plan=unlimited" },
      { status: 400 }
    );
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY?.trim();
  if (!stripeKey) {
    return NextResponse.json(
      { error: "Stripe is not configured." },
      { status: 500 }
    );
  }

  try {
    const stripe = new Stripe(stripeKey);

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${BASE_URL}/sitevitals/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL}/sitevitals/`,
    });

    if (!session.url) {
      return NextResponse.json({ error: "No checkout URL returned." }, { status: 500 });
    }

    return NextResponse.redirect(new URL(session.url));
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Stripe create-session error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
