// import jwt from 'jsonwebtoken';

// export const generateToken = (userId) => {
//     return jwt.sign({ userId }, process.env.JWT_SECRET, {
//         expiresIn: '1h',
//     });
// };

// export const authenticateToken = (req, res, next) => {
//     const token = req.headers['authorization']?.split(' ')[1];
//     if (!token) return res.status(401).json({ message: 'لا يوجد رمز، الوصول مرفوض' });

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded.userId;
//         next();
//     } catch (err) {
//         res.status(401).json({ message: 'الرمز غير صالح' });
//     }
// };







import jwt from 'jsonwebtoken';
import User from '../src/models/users';
import connectDB from '../src/db';

export const authenticateToken = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Connect to DB
        await connectDB();

        // Check if user is active and not deleted
        const user = await User.findById(decoded.userId);
        if (!user || user.isDeleted || !user.isActive) {
            return res.status(401).json({ message: 'Unauthorized access or account is disabled' });
        }

        req.user = decoded.userId;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};
