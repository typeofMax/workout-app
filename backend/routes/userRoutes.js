import express from 'express';
import { getUserProfile } from '../controllers/user/profileController.js';
import { userRegistration } from '../controllers/user/regController.js';

const router = express.Router()

router.route('/profile').get(getUserProfile);
router.route('/').post(userRegistration);

export default router;