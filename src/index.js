import './bot/bot.js';
import { bot } from './bot/bot.js';
import { config } from 'dotenv';

config();

// Start message handler
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    `🤖 Welcome! Just forward any message to me for DeepSeek AI analysis.`
  );
});



console.log('✅ Bot is running...');

