import { welcome, help, sticker, greeting } from './controllers/example';

export default function (bot) {
    bot.start(welcome);
    bot.help(help);
    bot.on('sticker', sticker);
    bot.hears('hi', greeting);
}