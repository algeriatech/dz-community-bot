const loadEnv      = require('dotenv').config
const { slackbot } = require('botkit')
const events       = require('./lib/events.js')
const patterns     = require('./lib/constants.js')
const controllers  = require('./controllers')


// load loadEnv
if (loadEnv().error)
  throw new Error('Could not load env')
if (!process.env.API_TOKEN)
  throw new Error('I need a API token! Grab one at https://my.slack.com/services/new/bot')

// setup
const controller = slackbot({
  debug           : process.env.NODE_ENV === 'development',
  retry           : 3,
  require_delivery: false,
  stats_optout    : true
})

// build a bot
const bot = controller.spawn({ token: process.env.API_TOKEN })

// wake up the bot
bot.startRTM(err => { if (err) throw new Error('Cannot connect to Slack!') })


// say hi to new comers
controller.hears(patterns.SALUTATIONS, [events.NO_MENTION, events.USER_TEAM_JOIN], controllers.greetings)
