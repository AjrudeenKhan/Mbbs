
import mongoose from "mongoose";

// Contact Form Schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // Name is required
  },
  email: {
    type: String,
    required: true,  // Email is required
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],  // Email validation
  },
  mobile: {
    type: String,
    required: true,  // Mobile is required
    match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number'],  // Mobile validation (10 digits)
  },
  message: {
    type: String,
    required: true,  // Message is required
  },
}, { timestamps: true }); // `timestamps` will add createdAt and updatedAt fields automatically

// Create model from schema
const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
