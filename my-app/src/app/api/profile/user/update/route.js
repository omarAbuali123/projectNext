import { NextResponse } from 'next/server';
import connectDB from '../../../../../db';
import User from '../../../../../models/users';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export async function PUT(request) {
  await connectDB();
  
  const token = request.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.json({ error: 'No token provided' }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { name, email, password } = await request.json();

    const user = await User.findById(decoded.id);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    user.username = name || user.username;
    user.email = email || user.email;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    await user.save();
    return NextResponse.json({ message: 'Profile updated successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}