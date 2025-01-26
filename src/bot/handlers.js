import { bot } from './bot.js';
import { getDeepSeekResponse } from '../services/deepseek.service.js';

export const handleMessage = async (msg) => {
  const chatId = msg.chat.id;
  const prompt = msg.text?.trim() || '';

  // Validate input
  if (!prompt) {
    return bot.sendMessage(chatId, '❌ Please send a message for the AI to process.');
  }

  try {
    // Get response from DeepSeek
    const response = await getDeepSeekResponse(prompt);
    bot.sendMessage(chatId, response);
  } catch (error) {
    console.error(`Handler Error: ${error.message}`);
    bot.sendMessage(chatId, '🚨 Failed to process your request. Please try again.');
  }
};