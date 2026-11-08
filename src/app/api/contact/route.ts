import { NextResponse } from "next/server";

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    // Basic server-side validation
    if (!body.name || body.name.trim().length < 2) {
      return NextResponse.json({ error: "Name must be at least 2 characters." }, { status: 400 });
    }
    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(body.email.trim())) {
      return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
    }
    if (!body.message || body.message.trim().length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters." }, { status: 400 });
    }

    const payload: ContactPayload = {
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone?.trim() || "",
      subject: body.subject?.trim() || "Website Inquiry",
      message: body.message.trim(),
    };

    // Log the contact submission
    console.log("[SRFEC Contact Form Submission]:", payload);

    // -----------------------------------------------------------------------
    // Integration Hook:
    // To send emails via Resend, Nodemailer, or SendGrid, add your API key:
    //
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "SRFEC Inquiries <noreply@srfec.com>",
    //   to: ["info@srfec.com"],
    //   reply_to: payload.email,
    //   subject: `New Inquiry: ${payload.subject} (${payload.name})`,
    //   text: `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\n\nMessage:\n${payload.message}`,
    // });
    // -----------------------------------------------------------------------

    return NextResponse.json({
      success: true,
      message: "Message received successfully.",
    });
  } catch (error) {
    console.error("[SRFEC Contact API Error]:", error);
    return NextResponse.json({ error: "Internal server error. Please try again later." }, { status: 500 });
  }
}

