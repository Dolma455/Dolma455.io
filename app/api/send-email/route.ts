// app/api/send-email/route.ts (Next.js 13+ with app directory)

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dlama5671@gmail.com",       // your Gmail
      pass: "cutd gilv sxro ontm",         // generated Gmail App Password
    },
  });

  const mailOptions = {
    from: `"${name}" <dlama5671@gmail.com>`,  // Display user's name, Gmail as sender
    to: "dlama5671@gmail.com",                // Your own email to receive messages
    replyTo: email,                           // Replies go to the user's email
    subject: `[Portfolio] ${subject}`,
    html: `
      <h3>New message from your portfolio contact form</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
