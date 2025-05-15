import { sendMessage, getConversation } from '../services/messageService.js';

export const handleSendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, content } = req.body;

    if (!senderId || !receiverId || !content) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const message = await sendMessage(senderId, receiverId, content);
    res.status(201).json(message);
  } catch (error) {
    console.error('Send message error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const handleGetConversation = async (req, res) => {
  try {
    const { user1, user2 } = req.params;
    const messages = await getConversation(parseInt(user1), parseInt(user2));
    res.json(messages);
  } catch (error) {
    console.error('Get conversation error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// In controllers/messageController.js
import { getAllChatPartners } from '../services/messageService.js';

export const handleGetChatUsers = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    const users = await getAllChatPartners(userId);
    res.json(users);
  } catch (error) {
    console.error('Get chat users error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

