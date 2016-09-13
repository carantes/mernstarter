import bunyan from 'bunyan'

const logger = bunyan.createLogger({
  name: 'filter',
  streams: [
    {
      level: 'info',
      stream: process.stdout
    },
    {
      level: 'error',
      path: '../error.log'
    },
    {
      level: 'debug',
      path: '../debug.log'
    }
  ]
})

export default logger
