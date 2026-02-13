import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      )
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY

    if (!RESEND_API_KEY) {
      // Fallback: log the submission and return success
      // In production, set RESEND_API_KEY to enable email delivery
      console.log("[Diagnosis Request]", { name, email, company, message })
      return NextResponse.json({ success: true, fallback: true })
    }

    // Send email via Resend
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Quiet Dissent <onboarding@resend.dev>",
        to: ["hello@quietdissent.com"],
        reply_to: email,
        subject: `Diagnosis Request from ${name}${company ? ` (${company})` : ""}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a1a1a; border-bottom: 2px solid #c8a55c; padding-bottom: 12px;">
              New Diagnosis Request
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 14px; width: 100px;">Name</td>
                <td style="padding: 10px 0; color: #1a1a1a; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 14px;">Email</td>
                <td style="padding: 10px 0; color: #1a1a1a; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #c8a55c;">${email}</a>
                </td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 14px;">Company</td>
                <td style="padding: 10px 0; color: #1a1a1a; font-size: 15px;">${company}</td>
              </tr>
              ` : ""}
            </table>
            <div style="margin-top: 24px; padding: 20px; background: #f9f7f3; border-radius: 8px;">
              <p style="color: #666; font-size: 13px; margin: 0 0 8px;">What's breaking</p>
              <p style="color: #1a1a1a; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin-top: 24px; color: #999; font-size: 12px;">
              Sent from quietdissent.com diagnosis form
            </p>
          </div>
        `,
      }),
    })

    if (!res.ok) {
      const error = await res.json()
      console.error("[Resend Error]", error)
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[Diagnosis API Error]", err)
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    )
  }
}
