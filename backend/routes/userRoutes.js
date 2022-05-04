import express from 'express';

import { userAuthentication } from '../controllers/user/authController.js';
import { getUserProfile } from '../controllers/user/profileController.js';
import { userRegistration } from '../controllers/user/regController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router()

router.route('/profile').get(protect, getUserProfile);
router.route('/login').post(userAuthentication);
router.route('/').post(userRegistration);

export default router;