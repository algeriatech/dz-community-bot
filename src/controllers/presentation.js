const { USER_ALREADY_INTRODUCED } = require('../lib/constants')


/**
 * Say hi
 * @param {bot} bot The bot to reply with
 * @param {string|object} msg The message to send back
 */
const greetings = (bot, msg) => {
  let m = `mar7ba biiiik <@${msg.user}> :smile:`

  // user has not already introduced himself
  if (!USER_ALREADY_INTRODUCED.test(msg.text))
    m += ' 3arrefna biik sadi9i'

  // this is NOT being posted to #chkoun
  if (msg.channel !== 'C3PG4274M') // tag:nasty
    m += ' f le canal <#C3PG4274M> :wink:'

  bot.reply(msg, m)
}

/**
 * Present the bot identity
 * @param {bot} bot The bot to reply with
 * @param {string|object} msg The message to send back
 */
const whoami = (bot, msg) => {
  bot.reply(msg, `<@${msg.user}>: Je suis l'ange gardien de cette communauté :innocent:`)
}


module.exports = {
  greetings,
  whoami,
}
