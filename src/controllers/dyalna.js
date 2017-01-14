const superagent = require('superagent')


const news = (bot, msg) => {
  superagent
    .get('https://dyalna.com/api/post/top')
    .then(data => {
      bot.startConversation(msg, (err, convo) => {
        convo.say('Sraw bezzaf swala7, voici les top news :')
        data.body.forEach(post => {
          convo.say({
            'attachments' : [{
              'color': '#36a64f',
              'author_name': 'Dyalna Top News',
              'author_link': 'dyalna.com',
              'title': `${ post.title }`,
              'title_link': `https://dyalna.com/post/show/${ post.slug }`,
              'thumb_url': `${ post.picture }`,
              'footer': 'Dyalna.com',
              'footer_icon': 'https://www.dyalna.com/favicon.ico?2',
            }],
          })
        })
      })
    })
}


module.exports = {
  news,
}
