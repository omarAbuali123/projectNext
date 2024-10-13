import { NextResponse } from 'next/server';
import connectDB from '../../../../../db';
import Order from '../../../../../models/orderModel';
import jwt from 'jsonwebtoken';

export async function GET(request, { params }) {
  await connectDB();
  
  // جلب التوكين من الكوكيز
  const token = request.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.json({ error: 'No token provided' }, { status: 401 });
  }

  try {
    // التحقق من التوكين
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.id !== params.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // جلب الطلبات بناءً على userId
    const orders = await Order.find({ userId: params.userId });
    const scheduledOrders = orders.filter(order => order.status === 'pending');
    const completedOrders = orders.filter(order => order.status === 'completed');

    // إرجاع البيانات
    return NextResponse.json({ scheduled: scheduledOrders, completed: completedOrders });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}

