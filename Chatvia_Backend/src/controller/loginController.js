// controllers/userController.js
import { loginUser } from '../services/loginService.js';
import { registerUser } from '../services/loginService.js';

export const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body,"This credential is written by frontend for Log-In")

  // Validate if username and password are provided
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    const result = await loginUser(username, password);

    if (result.error) {
      return res.status(401).json({ error: result.error });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};



export const register = async (req, res) => {
    const { email, username, password } = req.body;
  
    // Validate if all required fields are provided
    if (!email || !username || !password) {
      return res.status(400).json({ error: 'Email, username, and password are required' });
    }
  
    try {
      const result = await registerUser(email, username, password);
  
      if (result.error) {
        return res.status(409).json({ error: result.error });
      }
  
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };