const { createLogger, INFO, ERROR, DEBUG } = require('bunyan')


const logger = createLogger({
  name   : 'dz-community-bot',
  dev    : process.env.NODE_ENV === 'development',
  streams: [
    {
      level: process.env.NODE_ENV === 'development' ? DEBUG : INFO,
      path  : `${process.cwd()}/logs.log`,
      type  : 'rotating-file',
      period: '3d',
      count : 10,
    },
    {
      level : ERROR,
      path  : `${process.cwd()}/errors.log`,
      type  : 'rotating-file',
      period: '3d',
      count : 10,
    },
  ]
  ,
})


module.exports = logger
