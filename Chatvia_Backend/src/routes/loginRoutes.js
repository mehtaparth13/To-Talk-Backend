// routes/userRoutes.js
import express from 'express';
import { login } from '../controller/loginController.js';
import { register } from '../controller/loginController.js';

const router = express.Router();

// POST /login route
router.post('/login', login);
router.post('/register', register);

export default router;
