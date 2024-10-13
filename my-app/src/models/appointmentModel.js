const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    available_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Availability",
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    payment_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
      required: true,
    },
    status: {
      type: String,
      enum: ["scheduled", "completed"],
      default: "scheduled",
    },
    is_deleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.models.Appointment ||mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
