const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
  userAppointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
  userOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  userDiscount: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Discount' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Check if the model is already compiled to avoid OverwriteModelError
const User = mongoose.models.User || mongoose.model('User', userSchema);
module.exports = User;








// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   isActive: { type: Boolean, default: true },
//   isDeleted: { type: Boolean, default: false },
//   userAppointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
//   userOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
//   userDiscount : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Discount' }],  
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now }
// });

// const User = mongoose.model('User', userSchema);
// module.exports = User;


