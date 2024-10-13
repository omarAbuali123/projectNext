const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  discountId: { type: mongoose.Schema.Types.ObjectId, ref: "Discount" },
  orderProducts: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  ],
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  deliveryAddress: { type: String },
  paymentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment",
    required: true,
  },
  orderDate: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
});

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
module.exports = Order;
