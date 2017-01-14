const logger = require('../util/logger')


/**
 * Say hi
 * @param {bot} bot The bot to reply with
 * @param {string|object} msg The message to send back
 */
const greetings = (bot, msg) => {
  logger.info(`welcoming user ${msg.user.real_name} (@${msg.user.id})`)

  bot.startPrivateConversation({ user: msg.user.id }, function(err, convo) {
    logger.debug(`starting conversation with @${msg.user}`)

    convo.say(`mar7ba biiiik <@${msg.user}> :smile:!`)
    convo.say('Je suis <@iobot> le gardien de la communauté tech algérienne.')
    convo.say('Quelques petites règles à connaitre avant de rejoindre la mélée:')
    convo.say('La règle d\'or: il faut rester courtois avec tous les membres et voici les règles de bonne conduite https://github.com/youknowriad/awesome-algeria/blob/master/CODE-OF-CONDUCT.md')
    convo.say('Maintenant commence par te présenter sur le channel <#C3PG4274M>')
    convo.say('Tu peux discuter de tout sur le channel <#C3NN38PFS>')
    convo.say('Et si tu as besoin d\'aide sur le fonctionnement de cette team slack, pose ta question sur <#C3NNYRB5F>')
    convo.say('Aller, je te laisse et bienvenue parmi nous')
  })
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
