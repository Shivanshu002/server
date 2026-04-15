import { Schema, model } from 'mongoose';

const inquirySchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  courseOfInterest: { type: String, required: true },
  message: { type: String, default: '' },
}, { timestamps: true });

export default model('Inquiry', inquirySchema);
