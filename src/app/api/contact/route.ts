import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message, website } = body;

    // Honeypot check
    if (website) {
      return NextResponse.json({ success: true }); // Silent fail for bots
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // TODO: Send email via Resend, SendGrid, or similar
    // For now, log to console
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process form submission." },
      { status: 500 }
    );
  }
}
