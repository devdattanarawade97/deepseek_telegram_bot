import OpenAI from 'openai';
import { config } from 'dotenv';

config();


const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com', // Use DeepSeek's API endpoint
  apiKey: process.env.DEEPSEEK_API_KEY, // Load API key from .env
});



/**
 * Fetches a response from DeepSeek API based on the user's prompt.
 * @param {string} prompt - The user's input prompt.
 * @param {number} retries - Number of retries attempted (default: 0).
 * @returns {Promise<string>} - The AI-generated response.
 */
export const getDeepSeekResponse = async (prompt) => {
    try {
      console.log(`Sending prompt to DeepSeek: ${prompt}`);
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'deepseek-chat',
    });
     
      console.log(`DeepSeek response: ${completion}`);
    return completion.choices[0].message.content;

  } catch (error) {
    
    throw new Error(`API Error: ${error.message}`);
  }
};