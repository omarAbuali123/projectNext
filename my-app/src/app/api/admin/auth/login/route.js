import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(req) {
  const { username, password } = await req.json();

  const admin = await prisma.admin.findUnique({
    where: { username },
  });

  if (admin && bcrypt.compareSync(password, admin.password)) {
    return NextResponse.json({ message: 'Login successful' });
  } else {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
}
