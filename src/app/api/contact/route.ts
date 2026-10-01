import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const esc = (v: unknown) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim().slice(0, 100);
    const phone = String(body.phone ?? "").trim().slice(0, 30);
    const company = String(body.company ?? "").trim().slice(0, 100);
    const email = String(body.email ?? "").trim().slice(0, 120);
    const message = String(body.message ?? "").trim().slice(0, 2000);

    if (!name || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Name, phone and message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_RECEIVER,
      replyTo: /^[^\s@]+@[^\s@]+$/.test(email) ? email : undefined,
      subject: `New enquiry from ${name.replace(/[\r\n]/g, " ")} (${phone})`,
      text: `Name: ${name}\nPhone: ${phone}\nCompany: ${company}\nEmail: ${email}\n\n${message}`,
      html: `
        <h3>New enquiry</h3>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Phone:</strong> ${esc(phone)}</p>
        <p><strong>Company:</strong> ${esc(company)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${esc(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
