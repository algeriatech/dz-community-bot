/**
 * Send a development token
 * @param {bot} bot The bot to reply with
 * @param {string|object} msg The message to send back
 */
const devToken = (bot, msg) => {
  let m = 'Sorry! I do not have a token right now :/\nContact one of the admins'

  if (process.env.API_TOKEN_DEV)
    m = `Here is a token for you. Please use it wisely :wink:\n${process.env.API_TOKEN_DEV}`

  bot.reply(msg, m)
}


module.exports = { devToken }
