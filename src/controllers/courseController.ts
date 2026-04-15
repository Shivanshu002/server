import { Request, Response } from 'express';
import Course from '../models/Course';

export const getCourses = async (_req: Request, res: Response) => {
  const courses = await Course.find().sort({ createdAt: -1 });
  res.json(courses);
};

export const createCourse = async (req: Request, res: Response) => {
  const course = await Course.create(req.body);
  res.status(201).json(course);
};

export const updateCourse = async (req: Request, res: Response) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!course) return res.status(404).json({ message: 'Course not found' });
  res.json(course);
};

export const deleteCourse = async (req: Request, res: Response) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: 'Course deleted' });
};
