// src/services/userService.js
import prisma from '../prisma/prismaClient.js';

export const getAllUsers = async () => {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    throw new Error('Error fetching users: ' + error.message);
  }
};

export const getUserById = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    });
    return user;
  } catch (error) {
    throw new Error('Error fetching user: ' + error.message);
  }
};

export const updateUser = async (id, data) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data,
    });
    return updatedUser;
  } catch (error) {
    throw new Error('Error updating user: ' + error.message);
  }
};

export const deleteUser = async (id) => {
  try {
    await prisma.user.delete({
      where: { id: Number(id) },
    });
  } catch (error) {
    throw new Error('Error deleting user: ' + error.message);
  }
};
