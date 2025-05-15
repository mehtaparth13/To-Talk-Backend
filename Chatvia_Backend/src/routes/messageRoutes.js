import express from 'express';
import { handleGetChatUsers, handleGetConversation, handleSendMessage } from '../controller/messageController.js';
// import { handleSendMessage, handleGetConversation } from '../controllers/messageController.js';

const router = express.Router();

router.post('/messages', handleSendMessage);
router.get('/messages/:user1/:user2', handleGetConversation);
router.get('/chat-users/:userId', handleGetChatUsers);


export default router;
