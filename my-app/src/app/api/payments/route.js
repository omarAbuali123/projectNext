import { NextResponse } from "next/server";
import dbConnect from "../../../db";
import Payment from "../../../models/paymentModel";

export async function POST(request) {
  await dbConnect();

  try {
    const body = await request.json();
    const newPayment = new Payment(body);
    const savedPayment = await newPayment.save();

    // Here you would typically integrate with a payment gateway
    // and update the order status if the payment is successful

    return NextResponse.json(savedPayment, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process payment" },
      { status: 500 }
    );
  }
}
