import { Request, Response } from 'express';
import Inquiry from '../models/Inquiry';

export const getInquiries = async (_req: Request, res: Response) => {
  const inquiries = await Inquiry.find().sort({ createdAt: -1 });
  res.json(inquiries);
};

export const createInquiry = async (req: Request, res: Response) => {
  const inquiry = await Inquiry.create(req.body);
  res.status(201).json(inquiry);
};
