const dotenv       = require('dotenv')


// load env
if (dotenv.config().error)
  throw new Error('Could not load env')
if (!process.env.API_TOKEN)
  throw new Error('I need a API token! Grab one at https://my.slack.com/services/new/bot')

console.log('Hello, World!')
