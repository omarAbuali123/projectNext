import Order from '../../../../models/orderModel';
import db from '../../../../db';

db();

export async function GET() {
  const orders = await Order.find().populate('product'); // Adjust as needed
  return NextResponse.json(orders);
}
