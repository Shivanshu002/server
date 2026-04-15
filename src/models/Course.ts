import { Schema, model } from 'mongoose';

const courseSchema = new Schema({
  title: { type: String, required: true },
  duration: { type: String, required: true },
  fees: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
}, { timestamps: true });

export default model('Course', courseSchema);
