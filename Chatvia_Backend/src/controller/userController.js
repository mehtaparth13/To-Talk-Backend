// src/controllers/userController.js
import {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
  } from '../services/userService.js';
  
  export const getAllUsersController = async (req, res) => {
    try {
      const users = await getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getUserByIdController = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await getUserById(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const updateUserController = async (req, res) => {
    const { id } = req.params;
    const userData = req.body;
    try {
      const updatedUser = await updateUser(id, userData);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const deleteUserController = async (req, res) => {
    const { id } = req.params;
    try {
      await deleteUser(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  