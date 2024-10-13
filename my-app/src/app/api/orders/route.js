import { NextResponse } from "next/server";
import dbConnect from "../../../db";
import Order from "../../../models/orderModel";

export async function GET(request) {
  await dbConnect();

  try {
    const orders = await Order.find({ isDeleted: false })
      .populate("userId")
      .populate("orderProducts");
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  await dbConnect();

  try {
    const body = await request.json();
    const newOrder = new Order(body);
    const savedOrder = await newOrder.save();
    return NextResponse.json(savedOrder, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
