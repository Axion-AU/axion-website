import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.FORM_SUBMISSION_EMAIL;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!toEmail) {
      console.error('FORM_SUBMISSION_EMAIL environment variable is not set.');
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    const emailBody = `
      New message from your Axion Ventures contact form\n\n
      From: ${name}\n
      Email: ${email}\n\n
      Message:\n
      ${message}
    `;

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: toEmail,
      subject: `New Message from ${name} via Axion Ventures`,
      reply_to: email,
      text: emailBody,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
