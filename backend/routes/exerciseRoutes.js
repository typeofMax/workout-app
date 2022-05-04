import express from 'express';

import { addExercise } from '../controllers/exercise/exerciseController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addExercise);

export default router;
