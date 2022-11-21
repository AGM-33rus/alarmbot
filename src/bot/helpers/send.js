/* для навигации по меню через кнопки в сообщениях (callback_button), будет удобно при нажатии на кнопку отправлять не новое сообщение, а изменять старое */
// если пользователь отправил команду - ответить в новом сообщении, если нажал на кнопку - изменить старое
module.exports = async (ctx, text, extra) => {
  try {
    if (ctx.updateType === 'message') {
      await ctx.reply(text, extra);
    } else if (ctx.updateType === 'callback_query') {
      await ctx.answerCbQuery();
      await ctx.editMessageText(text, extra);
    }
  } catch (err) {
    console.error(err);
  }
};
