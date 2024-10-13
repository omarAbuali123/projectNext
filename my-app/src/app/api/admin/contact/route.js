import { NextResponse } from 'next/server';
import Contact from '../../../../models/contactModel';
import connectDB from '../../../../db';

export async function GET() {
  await connectDB();
  try {
    const messages = await Contact.find();
    return NextResponse.json({ success: true, data: messages }, { status: 200 });
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
