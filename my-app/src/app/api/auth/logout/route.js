import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST() {
  // Clear the token cookie
  const cookie = serialize('token', '', {
    maxAge: -1, // Expire the cookie immediately
    path: '/',  // Cookie available across the entire website
  });

  // Set the cookie in the response header
  const response = NextResponse.json({ message: 'Logged out successfully' });
  response.headers.set('Set-Cookie', cookie);

  return response;
}

export async function GET() {
  // If a method other than POST is used, return 405
  return NextResponse.json({ message: `Method Not Allowed` }, { status: 405 });
}
