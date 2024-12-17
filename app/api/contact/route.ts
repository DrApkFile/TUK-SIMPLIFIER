import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import 'dotenv/config';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'nigerianfiah@gmail.com',
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);

    // Include a detailed error message in the response
    return NextResponse.json(
      { 
        error: 'Failed to send email', 
        details: error.message || 'An unknown error occurred' 
      },
      { status: 500 }
    );
  }
}
