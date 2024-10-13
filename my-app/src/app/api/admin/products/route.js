import { NextResponse } from 'next/server';
import connectDB from '../../../../db';
import Product from '@/models/productsModel';

// Handle fetching all products
export async function GET() {
  try {
    await connectDB();
    const products = await Product.find();
    return NextResponse.json({ success: true, data: products }, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// Handle creating a new product
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const newProduct = new Product(body);
    const savedProduct = await newProduct.save();
    return NextResponse.json({ success: true, data: savedProduct }, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// Handle updating a product
export async function PUT(request) {
  try {
    await connectDB();
    const { _id, ...updatedFields } = await request.json();
    const updatedProduct = await Product.findByIdAndUpdate(_id, updatedFields, { new: true });
    return NextResponse.json({ success: true, data: updatedProduct }, { status: 200 });
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// Handle deleting a product
export async function DELETE(request) {
  try {
    await connectDB();
    const { _id } = await request.json();
    await Product.findByIdAndDelete(_id);
    return NextResponse.json({ success: true, message: 'Product deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
