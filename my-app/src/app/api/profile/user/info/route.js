import { NextResponse } from 'next/server';
import connectDB from '../../../../../db';
import User from '../../../../../models/users';
import jwt from 'jsonwebtoken';

export async function GET(request) {
  await connectDB();
  
  // الحصول على الرمز من الكوكي بدلاً من الـ Authorization header
  const token = request.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.json({ error: 'No token provided' }, { status: 401 });
  }

  try {
    // التحقق من الرمز
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // البحث عن المستخدم بواسطة الـ ID المستخرج من الرمز
    const user = await User.findById(decoded.id).select('-password'); // استثناء كلمة المرور من النتائج

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // إرجاع بيانات المستخدم
    return NextResponse.json( user , { status: 200 });
  } catch (error) {
    // في حال فشل التحقق من الرمز
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}
