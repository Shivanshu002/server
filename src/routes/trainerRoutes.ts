import { Router } from 'express';
import { getTrainers, createTrainer, deleteTrainer } from '../controllers/trainerController';

const router = Router();

router.get('/', getTrainers);
router.post('/', createTrainer);
router.delete('/:id', deleteTrainer);

export default router;
