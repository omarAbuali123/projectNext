import { NextResponse } from 'next/server';
import connectDB from '../../../../../db';
import User from '../../../../../models/users';
import Discount from '../../../../../models/discountModel';
import jwt from 'jsonwebtoken';

export async function GET(request, { params }) {
  await connectDB();
  
  const token = request.cookies.get('token')?.value;  
  if (!token) {
    return NextResponse.json({ error: 'No token provided' }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.id !== params.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const user = await User.findById(params.userId).populate('userDiscount');
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const validDiscounts = user.userDiscount.filter(discount => discount.isValid);
    const invalidDiscounts = user.userDiscount.filter(discount => !discount.isValid);

    return NextResponse.json({ valid: validDiscounts, invalid: invalidDiscounts });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}