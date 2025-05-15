// import prisma from '../prisma/client.js';
import prisma from '../prisma/prismaClient.js';

export const sendMessage = async (senderId, receiverId, content) => {
  return await prisma.message.create({
    data: { senderId, receiverId, content }
  });
};

export const getConversation = async (user1, user2) => {
  return await prisma.message.findMany({
    where: {
      OR: [
        { senderId: user1, receiverId: user2 },
        { senderId: user2, receiverId: user1 }
      ]
    },
    orderBy: { timestamp: 'asc' }
  });
};

// In services/messageService.js
export const getAllChatPartners = async (userId) => {
    const messages = await prisma.message.findMany({
      where: {
        OR: [{ senderId: userId }, { receiverId: userId }]
      },
      select: {
        senderId: true,
        receiverId: true
      }
    });
  
    const userIds = new Set();
    messages.forEach(msg => {
      if (msg.senderId !== userId) userIds.add(msg.senderId);
      if (msg.receiverId !== userId) userIds.add(msg.receiverId);
    });
  
    return await prisma.user.findMany({
      where: {
        id: { in: [...userIds] }
      },
      select: {
        id: true,
        username: true,
        name: true,
        image: true,
        status: true
      }
    });
  };
  