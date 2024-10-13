import Admin from '../../../../models/adminModel';
import bcrypt from 'bcrypt';
import db from '../../../../db';

db();

export async function POST(req) {
  const { username, password } = await req.json();

  const admin = await Admin.findOne({ username });
  
  if (admin && bcrypt.compareSync(password, admin.password)) {
    return NextResponse.json({ message: 'Login successful' });
  } else {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
}
