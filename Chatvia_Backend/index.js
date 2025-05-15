// server.js
import express from 'express';
import loginRoutes from './src/routes/loginRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import messageRoutes from './src/routes/messageRoutes.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// Register the user routes
app.use('/api', loginRoutes);
app.use('/api', userRoutes);
app.use('/api', messageRoutes);

app.listen(PORT, () => {
  console.log(`***** Server is running on port ${PORT} *****`);
  console.log(`WELCOME ADMIN`)
});
