import { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';
dotenv.config();

import handler from './handler';

// Initialize Telegraf
// with bot token from https://t.me/BotFather
const bot = new Telegraf(process.env.BOT_TOKEN);

handler(bot);

console.log('Telegram bot started');
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));