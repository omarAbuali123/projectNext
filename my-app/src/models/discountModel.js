const mongoose = require("mongoose");

const discountSchema = new mongoose.Schema(
  {
    value: { type: Number, enum: ["10%", "25%", "50%"], required: true },
    isValid: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Discount = mongoose.models.Discount ||mongoose.model("Discount", discountSchema);

module.exports = Discount;
