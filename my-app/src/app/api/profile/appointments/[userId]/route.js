import { NextResponse } from 'next/server';
import connectDB from '../../../../../db';
import Appointment from '../../../../../models/appointmentModel';
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

    const appointments = await Appointment.find({ user_id: params.userId }).populate('available_id');
    const scheduledAppointments = appointments.filter(appointment => appointment.status === 'scheduled');
    const completedAppointments = appointments.filter(appointment => appointment.status === 'completed');

    return NextResponse.json({ scheduled: scheduledAppointments, completed: completedAppointments });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}
