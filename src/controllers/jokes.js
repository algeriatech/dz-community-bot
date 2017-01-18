const jokes = require('jokes.dz')

module.exports = (bot, msg)  => {
  let randomJoke = jokes.random()
  if(randomJoke.img == null) {
    bot.startConversation(msg, (err, convo) => {
      convo.say(`9alek wahed nhar : ${randomJoke.joke}`)
    })
  } else {
    bot.startConversation(msg, (err, convo) => {
      convo.say({
        'attachments': [{
          'fallback': 'Iobot Joke',
          'color': '#36a64f',
          'author_name': 'Nass Mahboula',
          'author_link': 'https://github.com/algeriatech/jokes.dz',
          'title': '7kaya !',
          'title_link': 'https://github.com/algeriatech/jokes.dz',
          'image_url': `${randomJoke.img}`,
        }],
      })
    })
  }
}
