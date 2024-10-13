import Availability from '../../../../models/availabilityModel'; // Make sure the path is correct
import db from '../../../../db';
import { NextResponse } from 'next/server';

db();

export async function GET() {
  try {
    // Fetch all availability events
    const availabilities = await Availability.find();
    return NextResponse.json(availabilities);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    // Destructure all required fields from the incoming request
    const { available_date, available_start_time, available_end_time, price, numSubscribers } = await req.json();

    // Check if required fields are present
    if (!available_date || !available_start_time || !available_end_time) {
      return NextResponse.json({ error: 'available_date, available_start_time, and available_end_time are required.' }, { status: 400 });
    }

    // Create a new availability event
    const availability = new Availability({ 
      available_date, 
      available_start_time, 
      available_end_time, 
      price, 
      numSubscribers 
    });
    
    await availability.save();
    return NextResponse.json(availability, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
