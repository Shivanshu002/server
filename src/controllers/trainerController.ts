import { Request, Response } from 'express';
import Trainer from '../models/Trainer';

export const getTrainers = async (_req: Request, res: Response) => {
  const trainers = await Trainer.find();
  res.json(trainers);
};

export const createTrainer = async (req: Request, res: Response) => {
  const trainer = await Trainer.create(req.body);
  res.status(201).json(trainer);
};

export const deleteTrainer = async (req: Request, res: Response) => {
  await Trainer.findByIdAndDelete(req.params.id);
  res.json({ message: 'Trainer deleted' });
};
