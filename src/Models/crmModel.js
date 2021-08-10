import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: "Please enter your first name !",
  },
  lastName: {
    type: String,
    required: "Please enter your Last name !",
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
  Phone: {
    type: Number,
    required: "Please enter Contact Number",
  },
  Created_date: {
    type: Date,
    default: Date.now,
  },
});

export default ContactSchema;
