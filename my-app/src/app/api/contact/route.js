// import { NextResponse } from 'next/server';
// import Contact from '../../../models/contactModel';
// import connectDB from '../../../db';

// // الاتصال بقاعدة البيانات
// connectDB();

// export async function POST(req) {
//   try {
//     const { email, message } = await req.json();

//     if (!email || !message) {
//       return NextResponse.json({ error: "All fields are required" }, { status: 400 });
//     }

//     const newContact = new Contact({
//       email,
//       message,
//     });

//     await newContact.save();

//     return NextResponse.json({ message: "Message sent successfully" }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ error: "Error submitting message" }, { status: 500 });
//   }
// }







import { NextResponse } from 'next/server';// لإنشاء استجابات HTTP 
import dbConnect from '../../../db';
import Contact from '../../../models/contactModel';

export async function POST(request) {
  await dbConnect();//التأكد من أن الاتصال
  const body = await request.json();//استخراج البيانات

  try {
    const newContact = new Contact(body);
    await newContact.save();

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save contact.' }, { status: 500 });
  }
}
