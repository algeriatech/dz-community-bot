const superagent = require('superagent')

const news = (bot, msg) => {
  superagent
    .get('https://dyalna.com/api/post/top')
    .then(data => {
      bot.startConversation(msg, (err, convo) => {
        convo.say('Sraw bezzaf swala7, voici les top news :')
        data.body.slice(0, 5).forEach((news) => {
          convo.say({
            'attachments': [{
              'fallback': 'Dyalna Top News',
              'color': '#36a64f',
              'author_name': 'Dyalna Top News',
              'author_link': 'dyalna.com',
              'title': `${ news.title }`,
              'title_link': `https://dyalna.com/post/show/${ news.slug }`,
              'thumb_url': `${ news.picture }`,

              'footer': 'Dyalna.com',
              'footer_icon': 'https://www.dyalna.com/favicon.ico?2',
            }],
          })
        })
      })
    })
}

const jobs = (bot, msg) => {
  superagent
    .get('http://jobs.dyalna.com/jobs/api.php/job?category=1&page=1')
    .then(data => {
      bot.startConversation(msg, (err, convo) => {
        convo.say('Undi khir we khmir khayer li tnaseb tes compétences ! :')
        data.body.slice(0, 5).forEach((job) => {
          if (msg.channel == 'C3NRY5JP2' || msg.event == 'direct_message') {
            convo.say({
              'attachments': [{
                'fallback': 'Dyalna Jobs',
                'color': '#36a64f',
                'author_name': 'Dyalna Jobs',
                'author_link': 'dyalna.com',
                'title': `${ job.title }`,
                'title_link': `http://jobs.dyalna.com/job/${ job.slug }`,
                'thumb_url': 'http://careers.queensu.ca/sites/webpublish.queensu.ca.cswww/files/images/jobs.png',
                'footer': 'Dyalna.com',
                'footer_icon': 'https://www.dyalna.com/favicon.ico?2',
              }],
            })
          } else {
            convo.say('Maelish tsa9sini f <#C3NRY5JP2> channel :ghost:')
          }
        })
      })
    })
}


module.exports = {
  news,
  jobs,
}
