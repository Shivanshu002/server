import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import courseRoutes from './routes/courseRoutes';
import trainerRoutes from './routes/trainerRoutes';
import inquiryRoutes from './routes/inquiryRoutes';

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.use('/api/courses', courseRoutes);
app.use('/api/trainers', trainerRoutes);
app.use('/api/inquiries', inquiryRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => {
  console.error('DB connection failed:', err);
  process.exit(1);
});
