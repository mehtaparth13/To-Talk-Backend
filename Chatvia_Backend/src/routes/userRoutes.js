// src/routes/userRoutes.js
import express from 'express';
import {
  getAllUsersController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
} from '../controller/userController.js';

const router = express.Router();

router.get('/getalluser', getAllUsersController);
router.get('/getuserbyid/:id', getUserByIdController);
router.put('/updateuser/:id', updateUserController);
router.delete('/deleteuser/:id', deleteUserController);

export default router;
