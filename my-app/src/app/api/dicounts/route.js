import { NextResponse } from "next/server";
import dbConnect from "../../../db";
import Discount from "../../../models/discountModel";

export async function GET(request) {
  await dbConnect();

  try {
    const discounts = await Discount.find({ isValid: true });
    return NextResponse.json(discounts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch discounts" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  await dbConnect();

  try {
    const body = await request.json();
    const newDiscount = new Discount(body);
    const savedDiscount = await newDiscount.save();
    return NextResponse.json(savedDiscount, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create discount" },
      { status: 500 }
    );
  }
}
