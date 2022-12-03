const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Добро пожаловать!'));
bot.help((ctx) => ctx.reply('Отправь мне стикер'));
bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.hears('привет', (ctx) => ctx.reply('Привет!'));

/* bot.start(ctx => {
 *   console.log("Received /start command")
 *   try {
 *     return ctx.reply("Hi")
 *   } catch (e) {
 *     console.error("error in start action:", e)
 *     return ctx.reply("Error occured")
 *   }
 * }) */

// AWS event handler syntax (https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html)
/* exports.handler = async (event) => {
 *   try {
 *     await bot.handleUpdate(JSON.parse(event.body));
 *     return { statusCode: 200, body: '' };
 *   } catch (e) {
 *     console.error('error in handler:', e);
 *     return {
 *       statusCode: 400,
 *       body: 'This endpoint is meant for bot and telegram communication',
 *     };
 *   }
 * }; */
