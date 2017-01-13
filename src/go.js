const loadEnv = require('dotenv').config
const { slackbot } = require('botkit')
const events = require('./lib/events.js')
const patterns = require('./lib/constants.js')
// controllers
const devCtrl = require('./controllers/dev')
const presentationCtrl = require('./controllers/presentation')
const dailyCtrl = require('./controllers/daily')


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
  stats_optout    : true,
})

// build a bot
const bot = controller.spawn({ token: process.env.API_TOKEN })

// wake up the bot
bot.startRTM(err => { if (err) throw new Error('Cannot connect to Slack!') })

// Dev
controller.hears(patterns.TOKEN, [events.MESSAGE_DIRECT], devCtrl.devToken)
// Welcome
controller.on(events.USER_TEAM_JOIN, presentationCtrl.greetings)
// Presentation
controller.hears(patterns.WHOAMI, [events.MESSAGE_DIRECT, events.MENTION, events.MENTION_DIRECT], presentationCtrl.whoami)
// Daily
controller.hears(patterns.WEEKEND, [events.MESSAGE_DIRECT, events.MENTION, events.MENTION_DIRECT], dailyCtrl.isItTheWeekend)
