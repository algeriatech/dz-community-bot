/**
 * Send a development token
 * @param bot
 * @param msg
 */
const devToken = (bot, msg) => {
  bot.reply(msg, `Here is a token for you. Please use it wisely :wink:\n${process.env.API_TOKEN}`)
}

/**
 * Say hi
 * @param bot
 * @param msg
 */
const greetings = (bot, msg) => {
  bot.reply(msg, `mar7ba biiiik <@${msg.user}> :smile:\n3arrefna biik f le canal <#chkoun> :wink:`)
}


module.exports = {
  devToken,
  greetings,
}
