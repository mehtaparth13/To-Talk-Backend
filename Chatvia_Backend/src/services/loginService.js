// services/userService.js
import prisma from '../prisma/prismaClient.js';

export const loginUser = async (username, password) => {
  try {
    // Find the user by username
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    
    // If user does not exist or password is incorrect
    if (!user || user.password !== password) {
      return { error: 'Invalid username or password' };
    }

    // If user is found and password matches
    return { message: 'Login successful', user };
  } catch (error) {
    throw new Error('Error during login: ' + error.message);
  }
};

export const registerUser = async (email, username, password) => {
    try {
      // Check if the email or username already exists
      const existingUser = await prisma.user.findFirst({
        where: {
          OR: [
            { email },
            { username },
          ],
        },
      });
  
      if (existingUser) {
        return { error: 'Email or username already exists' };
      }
  
      // Create the new user
      const newUser = await prisma.user.create({
        data: {
          email,
          username,
          password, // You can hash the password before saving (optional)
        },
      });
  
      return { message: 'Registration successful', user: newUser };
    } catch (error) {
      throw new Error('Error during registration: ' + error.message);
    }
  };
