const cron = require('node-cron')
const superagent = require('superagent')


const news = (bot) => {
  cron.schedule('0 0 9 1-31 1-12 *', () => {
    bot.say({
      text: 'Good morning @here her\'s youe daily news',
      channel: 'C3NN38PFS',
    })
    superagent
      .get('https://dyalna.com/api/post/top')
      .then(data => {
        data.body.slice(0, 5).forEach((news) => {
          bot.say({
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
            channel: 'C3NN38PFS',
          })
        })
      })
  })
}

const jobs = (bot) => {
  cron.schedule('0 0 9 1-31 1-12 1,3,5', () => {
    bot.say({
      text: 'Good morning @here her\'s you jobs position',
      channel: 'C3NRY5JP2',
    })
    superagent
      .get('http://jobs.dyalna.com/jobs/api.php/job?category=1&page=1')
      .then(data => {
        data.body.slice(0, 5).forEach((job) => {
          bot.say({
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
            channel: 'C3NRY5JP2',
          })
        })
      })
  })
}
module.exports = {
  news,
  jobs,
}
