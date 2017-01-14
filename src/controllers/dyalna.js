const superagent = require('superagent')


const news = (bot, msg) => {
  superagent
    .get('https://dyalna.com/api/post/top')
    .then(data => {
      bot.startConversation(msg, (err,convo) => {
        convo.say('Sraw bezzaf swala7, voici les top news :')
        data.body.forEach(post => {
          convo.say({ text: ` - ${ post.title } https://dyalna.com/post/show/${ post.slug }`, unfurl_links: false })
        })
      })
    })
}


module.exports = { news }
