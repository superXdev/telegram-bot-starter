import { view } from '../utils/view';

const exampleMsg = view('example');

export function welcome(ctx) {
    const message = view('welcome', { nickname: 'folks' }).welcome;
    ctx.reply(message);
}

export function help(ctx) {
    ctx.reply(exampleMsg.help);
}

export function sticker(ctx) {
    ctx.reply(exampleMsg.sticker);
}

export function greeting(ctx) {
    ctx.reply(exampleMsg.greeting);
}