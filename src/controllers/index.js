const greetings = (bot, msg) => {
  // TODO cache users
  bot.api.users.info({ user: msg.user }, (err, data) => {
    bot.reply(msg, `mar7ba biiiik @${data.user.name} :smile:\n3arrefna biik f le canal #chkoun :wink:`)
  })
}


module.exports = {
  greetings,
}
