const loadEnv          = require('dotenv').config
const logger           = require('./util/logger')
const { slackbot }     = require('botkit')
const events           = require('./lib/events.js')
const patterns         = require('./lib/constants.js')
// controllers
const devCtrl          = require('./controllers/dev')
const presentationCtrl = require('./controllers/presentation')
const dailyCtrl        = require('./controllers/daily')
const dyalnaCtrl       = require('./controllers/dyalna')
const jokesCtrl        = require('./controllers/jokes')
const schedulerCtrl    = require('./controllers/scheduler')
const attitudeCtrl     = require('./controllers/attitude')
const locationCtrl     = require('./controllers/location')

// load loadEnv
if (loadEnv().error)
  logger.error('Could not load env')
if (!process.env.API_TOKEN) {
  logger.fatal('API_TOKEN not found in process.env')
  throw new Error('I need a API token! Grab one at https://my.slack.com/services/new/bot')
}

// setup
const controller = slackbot({
  debug           : process.env.NODE_ENV === 'development',
  retry           : 3,
  require_delivery: true,
  stats_optout    : true,
})

// build a bot
const bot = controller.spawn({ token: process.env.API_TOKEN })

// wake up the bot
bot.startRTM(err => {
  logger.debug('Starting the bot')
  // Starting the Job/News schedule
  scheduler.news(bot)
  scheduler.jobs(bot)
  if (err) {
    logger.fatal(err)
    throw new Error('Cannot connect to Slack!')
  }
})

// Dev
controller.hears(patterns.TOKEN, [events.MESSAGE_DIRECT], devCtrl.devToken)
// Welcome
controller.on(events.USER_TEAM_JOIN, presentationCtrl.greetings)
// Presentation
controller.hears(patterns.WHOAMI, [events.MESSAGE_DIRECT, events.MENTION, events.MENTION_DIRECT], presentationCtrl.whoami)
// Daily
controller.hears(patterns.WEEKEND, [events.MESSAGE_DIRECT, events.MENTION, events.MENTION_DIRECT], dailyCtrl.isItTheWeekend)
// News
controller.hears(patterns.NEWS, [events.MESSAGE_DIRECT, events.MENTION, events.MENTION_DIRECT], dyalnaCtrl.news)
//Jobs
controller.hears(patterns.JOBS, [events.MESSAGE_DIRECT, events.MENTION, events.MENTION_DIRECT], dyalnaCtrl.jobs)
//Jokes
controller.hears(patterns.JOKES, [events.MESSAGE_DIRECT, events.MENTION, events.MENTION_DIRECT], jokesCtrl)
//Attitude
controller.hears(patterns.ATTITUDE, [events.MESSAGE_DIRECT, events.MENTION, events.MENTION_DIRECT], attitude.El9der)
//location
controller.hears(patterns.LOCATION, [events.MESSAGE_DIRECT, events.MENTION, events.MENTION_DIRECT], location.WhereAreYou)
