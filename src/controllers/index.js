const moment = require( 'moment' )

/**
 * Send a development token
 * @param {bot} bot The bot to reply with
 * @param {string|object} msg The message to send back
 */
const devToken = (bot, msg) => {
  bot.reply(msg, `Here is a token for you. Please use it wisely :wink:\n${process.env.API_TOKEN}`)
}

/**
 * Say hi
 * @param {bot} bot The bot to reply with
 * @param {string|object} msg The message to send back
 */
const greetings = (bot, msg) => {
  bot.reply(msg, `mar7ba biiiik <@${msg.user}> :smile:\n3arrefna biik f le canal <#chkoun> :wink:`)
}

const whoami = (bot, msg) => {
  bot.reply(msg, `<@${msg.user}>: Je suis l'ange gardien de cette communauté :innocent:`)
}

const isItTheWeekend = (bot, msg) => {
  const date = moment()
  const day = parseInt(date.format('E'))
  const hour = parseInt(date.format('H'))
  const isAlgerianWeekend = day === 5 || day === 6 || day === 4 && hour >= 17
  const isForeignWeekend = day === 6 || day === 7
  const isClose = day === 4 && hour >= 14
  const isCloseToAnEnd = day === 6 && hour >= 18

  if (isAlgerianWeekend && isCloseToAnEnd)
    return bot.reply(msg, `<@${msg.user}>: Oui mais ça sent la fin :slightly_frowning_face:`)
  if (isAlgerianWeekend && !isForeignWeekend)
    return bot.reply(msg, `<@${msg.user}>: Oui well wakila nta gawri`)
  if (isAlgerianWeekend)
    return bot.reply(msg, `<@${msg.user}>: Oui! mkallak 3la el khedma?`)
  if (!isAlgerianWeekend && isClose)
    return bot.reply(msg, `<@${msg.user}>: Non, bessa7 bdat ri7at t3am`)

  bot.reply(msg, `<@${msg.user}>: Mazal 3andek ma tesbar`)
}


module.exports = {
  devToken,
  greetings,
  isItTheWeekend,
  whoami,
}
