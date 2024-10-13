// import { NextResponse } from 'next/server';
// import connectDB from '../../../../db';
// import User from '../../../../models/users';
// import bcrypt from 'bcryptjs';

// export async function POST(request) {
//   try {
//     // Connect to database
//     await connectDB();
    
//     // Get request body
//     const body = await request.json();
//     const { username, email, password } = body;

//     // Validate input
//     if (!username || !email || !password) {
//       return NextResponse.json(
//         { error: 'Please provide all required fields' },
//         { status: 400 }
//       );
//     }

//     // Check if user exists
//     const existingUser = await User.findOne({
//       $or: [{ email }, { username }]
//     });

//     if (existingUser) {
//       return NextResponse.json(
//         { error: 'User already exists' },
//         { status: 400 }
//       );
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create user
//     const user = await User.create({
//       username,
//       email,
//       password: hashedPassword
//     });

//     return NextResponse.json(
//       { 
//         message: 'User created successfully',
//         user: {
//           id: user._id,
//           username: user.username,
//           email: user.email
//         }
//       },
//       { status: 201 }
//     );

//   } catch (error) {
//     console.error('Signup error:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }











import { NextResponse } from 'next/server';
import connectDB from '../../../../db';
import User from '../../../../models/users';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    // Connect to database
    await connectDB();
    
    // Get request body
    const body = await request.json();
    const { username, email, password } = body;

    // Validate input
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: 'Please provide all required fields' },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      isActive: true,
      isDeleted: false,
      userAppointments: [], // Initialize as empty array
      userOrders: [],       // Initialize as empty array
      userDiscount: [],     // Initialize as empty array
    });

    return NextResponse.json(
      { 
        message: 'User created successfully',
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
