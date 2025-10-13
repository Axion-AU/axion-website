import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/emails/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.FORM_SUBMISSION_EMAIL;


export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!toEmail) {
      console.error("FORM_SUBMISSION_EMAIL environment variable is not set.");
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Collaborate <collaborate@mail.axionventures.com.au>',
      to: toEmail,
      subject: `New Message from ${name} via Axion Ventures`,
      reply_to: email,
      react: <ContactFormEmail name={name} email={email} message={message} />,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
