const logger = require('../util/logger')


/**
 * Send a development token
 * @param {bot} bot The bot to reply with
 * @param {string|object} msg The message to send back
 */
const devToken = (bot, msg) => {
  let m = 'Sorry! I do not have a token right now :/\nContact one of the admins'

  if (process.env.API_TOKEN_DEV)
    m = `Here is a token for you, paste it in you \`.env\` file
\`API_TOKEN = ${process.env.API_TOKEN_DEV}\`
Please use is wisely :wink:`

  bot.reply(msg, m)
  logger.info(`User @${msg.user} has asked for a token`)
}


module.exports = { devToken }
