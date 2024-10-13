import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';

export async function GET(req) {
  // Allow only GET requests
  console.log("test");

  const token = req.cookies?.get('token')?.value; // Retrieve the cookie with Next.js cookies API

  if (!token) {
    return NextResponse.json({ isLoggedIn: false }, { status: 200 });
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    // If the token is valid, the user is logged in
    return NextResponse.json({ isLoggedIn: true, user: payload }, { status: 200 });
  } catch (error) {
    // If the token is invalid or expired, the user is not logged in
    console.error('Token verification failed:', error);
    return NextResponse.json({ isLoggedIn: false }, { status: 200 });
  }
}

export async function POST(req) {
  // Handle POST requests if needed, or reject
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
