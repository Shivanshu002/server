import { Schema, model } from 'mongoose';

const trainerSchema = new Schema({
  name: { type: String, required: true },
  expertise: { type: String, required: true },
  experience: { type: String, required: true },
  photoUrl: { type: String, default: '' },
});

export default model('Trainer', trainerSchema);
