import TelegramBot from 'node-telegram-bot-api';
import { handleMessage } from './handlers.js';
import { config } from 'dotenv';

config();

const token = process.env.TELEGRAM_BOT_TOKEN;
export const bot = new TelegramBot(token, { polling: true });

// Initialize bot handlers
bot.on('message', async (msg) => {
    try {
    
      await handleMessage(msg);
    } catch (error) {
      console.error(`Error handling message: ${error.message}`);
      bot.sendMessage(msg.chat.id, '⚠️ An error occurred. Please try again later.');
    }
  });