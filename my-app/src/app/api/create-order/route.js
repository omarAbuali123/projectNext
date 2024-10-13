import { NextResponse } from "next/server";
import dbConnect from "../../../db";
import Order from "../../../models/orderModel";
import Payment from "../../../models/paymentModel";
// import {auth } from "@/auth";
import { middleware } from "@/middleware";

export async function POST(request) {
  try {
    await dbConnect();

    // Get the user data from the request headers
    // This is set by your middleware
    const userDataString = request.headers.get("user");
    if (!userDataString) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const userData = JSON.parse(userDataString);

    const { orderProducts, totalPrice, deliveryAddress, paymentIntentId } =
      await request.json();

    // Create payment record
    const payment = await Payment.create({
      user_id: userData.userId, // Assuming the JWT payload includes a userId
      value: totalPrice,
      // Add other payment details as needed
    });

    // Create order record
    const order = await Order.create({
      userId: userData.userId,
      orderProducts,
      totalPrice,
      deliveryAddress,
      paymentId: payment._id,
      status: "pending",
    });

    return NextResponse.json({ order, payment }, { status: 201 });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { message: "Error creating order", error: error.message },
      { status: 500 }
    );
  }
}
