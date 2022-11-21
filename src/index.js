// подключить установленный dotenv, для того, чтобы он подгрузил значения
require('dotenv').config();

const path = require('path');
// импортируем главный класс Telegraf, который мы используем для создания нового бота
const { Telegraf } = require('telegraf');
// Подключаем
const TelegrafI18n = require('telegraf-i18n');

const i18n = new TelegrafI18n({
  defaultLanguage: 'ru',
  directory: path.resolve(__dirname, './bot/locales'),
});

// достаем наш токен из process.env
const { BOT_TOKEN } = process.env;
const bot = new Telegraf(BOT_TOKEN);

bot.use(i18n.middleware());

bot.on(/\/start /, (msg) => {
  const chatId = msg.chat.id;
  // console.log('Connect success!');
  bot.sendMessage(chatId, 'Bot are working!');
});

// starting block
bot.command('start', (ctx) => {
  // console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    'welcome to eazybite,a simple way to communicate with us and place your orders. How can we help you today?To get stared please type hello.',
    {}
  );
});

bot.hears('hello', (ctx) => {
  // console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    'welcome to eazybite, How can we help you today?',
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'orders', callback_data: 'orders' }],
          [{ text: 'feedback', callback_data: 'feedback' }],
          [{ text: 'help', callback_data: 'help' }],
        ],
      },
    }
  );
});

// Keyboard layout for requesting phone number and location
const requestPhoneKeyboard = {
  reply_markup: {
    one_time_keyboard: true,
    keyboard: [
      [
        {
          text: 'My phone number',
          request_contact: true,
          one_time_keyboard: true,
        },
      ],
      ['Cancel'],
    ],
  },
};

const requestLocationKeyboard = {
  reply_markup: {
    one_time_keyboard: true,
    keyboard: [
      [
        {
          text: 'My location',
          request_location: true,
          one_time_keyboard: true,
        },
      ],
      ['Cancel'],
    ],
  },
};

// ordering block
bot.action('orders', (ctx, next) => {
  // console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    'Can we get access to your phone number?',
    requestPhoneKeyboard
  );
});

bot.on('contact', (ctx) => {
  // console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    'Can we access your location?',
    requestLocationKeyboard
  );
});

bot.hears('location', (ctx) => {
  // console.log(ctx.from);
  const priceMessage = `click one option that you prefer`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'food', callback_data: 'food' },
          { text: 'drinks', callback_data: 'drinks' },
        ],
      ],
    },
  });
});

bot.action('food', (ctx) => {
  bot.telegram.sendPhoto(ctx.chat.id, { source: 'res/food.png' });
});

bot.action('drinks', (ctx) => {
  bot.telegram.sendPhoto(ctx.chat.id, { source: 'res/drinks.png' });
});

bot.hears('001', (ctx) => {
  // console.log(ctx.from);
  const priceMessage = `Great, Your total pay will be kes 350`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'pay on delivery', callback_data: 'delivery' },
          { text: 'Mobile money', callback_data: 'mobile' },
        ],
      ],
    },
  });
});

bot.hears('002', (ctx) => {
  // console.log(ctx.from);
  const priceMessage = `Great, Your total pay will be kes 450`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'pay on delivery', callback_data: 'delivery' },
          { text: 'Mobile money', callback_data: 'mobile' },
        ],
      ],
    },
  });
});

bot.hears('003', (ctx) => {
  // console.log(ctx.from);
  const priceMessage = `Great, Your total pay will be kes 500`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'pay on delivery', callback_data: 'delivery' },
          { text: 'Mobile money', callback_data: 'mobile' },
        ],
      ],
    },
  });
});

bot.hears('004', (ctx) => {
  // console.log(ctx.from);
  const priceMessage = `Great, Your total pay will be kes 600`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'pay on delivery', callback_data: 'delivery' },
          { text: 'Mobile money', callback_data: 'mobile' },
        ],
      ],
    },
  });
});

bot.hears('pine', (ctx) => {
  // console.log(ctx.from);
  const priceMessage = `Great, Your total pay will be 100`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'pay on delivery', callback_data: 'delivery' },
          { text: 'Mobile money', callback_data: 'mobile' },
        ],
      ],
    },
  });
});

bot.hears('apple', (ctx) => {
  // console.log(ctx.from);
  const priceMessage = `Great, Your total pay will be kes 100`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'pay on delivery', callback_data: 'delivery' },
          { text: 'Mobile money', callback_data: 'mobile' },
        ],
      ],
    },
  });
});

bot.hears('berry', (ctx) => {
  // console.log(ctx.from);
  const priceMessage = `Great, Your total pay will be kes 100`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'pay on delivery', callback_data: 'delivery' },
          { text: 'Mobile money', callback_data: 'mobile' },
        ],
      ],
    },
  });
});

bot.hears('orange', (ctx) => {
  // console.log(ctx.from);
  const priceMessage = `Great, Your total pay will be kes 350`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'pay on delivery', callback_data: 'delivery' },
          { text: 'Mobile money', callback_data: 'mobile' },
        ],
      ],
    },
  });
});
bot.hears('mango', (ctx) => {
  // console.log(ctx.from);
  const priceMessage = `Great, Your total pay will be kes 100`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'pay on delivery', callback_data: 'delivery' },
          { text: 'Mobile money', callback_data: 'mobile' },
        ],
      ],
    },
  });
});

bot.action('delivery', (ctx) => {
  // console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    'Thank you for buying with us, our rider will be there in a moment please make sure you have the right amount with you to avoid imconvienience.Enjoy your delicacies ,hope to see you soon!',
    {}
  );
});

bot.action('mobile', (ctx) => {
  // console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    'please reply with the transcation code here, starting with MPESA or AIRTEL MONEY. The paybill number is 098098 account number is your name',
    {}
  );
});

bot.hears(['MPESA', 'AIRTEL MONEY'], (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat.id,
    'Thank you for buying with us.Enjoy your delicacies, hope to see you soon!',
    {}
  );
});

// help block
bot.action('help', (ctx) => {
  // console.log(ctx.from);
  const priceMessage = `please choose one option that you prefer`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'TENDER', callback_data: 'TENDER' },
          { text: 'VACANCY', callback_data: 'VACANCY' },
        ],

        [{ text: 'Back to Menu', callback_data: 'hello' }],
      ],
    },
  });
});

bot.action('VACANCY', (ctx) => {
  bot.telegram.sendPhoto(ctx.chat.id, { source: 'res/vacancy.png' });
});

bot.action('TENDER', (ctx) => {
  bot.telegram.sendPhoto(ctx.chat.id, { source: 'res/tender.png' });
});
// feedback block

bot.action('feedback', (ctx) => {
  // console.log(ctx.from);
  const priceMessage = `click one option that you prefer`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'bot', callback_data: 'Bot' },
          { text: 'Restaraunt', callback_data: 'Restaraunt' },
        ],

        [{ text: 'Back to Menu', callback_data: 'hello' }],
      ],
    },
  });
});
bot.action('Bot', (ctx) => {
  // console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    'Please reply  here to tell us ow we can improve this bot.',
    {}
  );
});
bot.action('Restaraunt', (ctx) => {
  // console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    'Please reply here to tell us how we can improve the services of our restaurant.',
    {}
  );
});
bot.hears('MENU', (ctx) => {
  bot.telegram.sendPhoto(ctx.chat.id, { source: 'res/food.png' });
});

// запускаем бота
bot.launch();

/* import { logger, getMe, getWebHookInfo, setWebHook } from './functions';
 * import WebHook from './WebHook'; */

/**
 * Получаем данные от Телеграм
 */
/* function doPost(request) {
 *   try {
 *     // получаем данные
 *     const response = JSON.parse(request.postData.contents);
 *     logger(response);
 *     // направляем данные в объект WebHook
 *     const webhook = new WebHook(response);
 *   } catch (et) {
 *     logger(et.getMessage());
 *   }
 * } */

// global.doPost = doPost;
// global.logger = logger;
// global.getMe = getMe;
// global.setWebHook = setWebHook;
// global.getWebHookInfo = getWebHookInfo;
