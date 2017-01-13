const moment = require('moment')


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


module.exports = { isItTheWeekend }
