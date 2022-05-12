import express from 'express';

import { addWorkout } from '../controllers/workout/workoutController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addWorkout);

export default router;
