/**
 * Send a development token
 * @param {bot} bot The bot to reply with
 * @param {string|object} msg The message to send back
 */
const devToken = (bot, msg) => {
  let m = `Here is a token for you. Please use it wisely :wink:\n${process.env.API_TOKEN_DEV}`

  bot.reply(msg, m)
}


module.exports = { devToken }
