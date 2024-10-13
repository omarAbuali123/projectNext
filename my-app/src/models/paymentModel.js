const mongoose = require("mongoose");

const paymentSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    appointment_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
    },
    order_id: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    value: { type: Number, required: true },
    userDiscount: [{ type: mongoose.Schema.Types.ObjectId, ref: "Discount" }],
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
