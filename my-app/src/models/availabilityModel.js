const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const availabilitySchema = new Schema(
  {
    available_date: { type: Date, required: true },
    available_start_time: { type: String, required: true },
    available_end_time: { type: String, required: true },
    price: { type: Number },
    numSubscribers: { type: Number },  // Corrected from `numSubcribers` to `numSubscribers`
    is_deleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// Check if the model is already defined before creating it
const Availability = mongoose.models.Availability || mongoose.model("Availability", availabilitySchema);

module.exports = Availability;
  