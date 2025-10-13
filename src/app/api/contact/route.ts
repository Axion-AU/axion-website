import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/emails/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.FORM_SUBMISSION_EMAIL;


export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    console.log("Contact API route hit. Body:", { name, email, message });

    if (!toEmail) {
      console.error("FORM_SUBMISSION_EMAIL environment variable is not set.");
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }

    console.log(`Attempting to send email to ${toEmail}`);

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: toEmail,
      subject: `New Message from ${name} via Axion Ventures`,
      reply_to: email,
      react: ContactFormEmail({ name, email, message }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("Email sent successfully via Resend:", data);
    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (e: any) {
    console.error("Error processing request:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
