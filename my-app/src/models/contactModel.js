// const mongoose = require("mongoose");

// const contactSchema = new mongoose.Schema(
//   {
//     email: { type: String, required: true },
//     message: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// const Contact = mongoose.model("Contact", contactSchema);

// module.exports = Contact;




import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

// src/models/contactModel.js






// const mongoose = require("mongoose");

// const contactSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },  // Add the name field
//     email: { type: String, required: true },
//     message: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

// module.exports = Contact; // Make sure to use module.exports
