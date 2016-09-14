import Express from 'express'
import compression from 'compression'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import path from 'path'
import logger from './util/logger'

// Import required modules
import { serverRender } from './render'
import routes from './routes'
import devServer from './devServer'
import dummyData from './dummyData'

// Defaults
const ENV = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/mernapp'
logger.info({ ENV, PORT, MONGO_URL }, 'Defaults')

// Initialize the Express App
const app = new Express()

if (ENV === 'development') {
  devServer(app) // Webpack dev server
}

// MongoDB
mongoose.Promise = global.Promise
mongoose.connect(MONGO_URL, (error) => {
  if (error) {
    logger.error('Please make sure Mongodb is installed and running!')
  }

  // feed some dummy data in DB.
  dummyData()
})

// Apply body Parser and server public assets and routes
app.use(compression())
app.use(bodyParser.json({ limit: '20mb' }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }))
app.use(Express.static(path.resolve(__dirname, '../../dist')))

// Server Rendering (React)
app.use(serverRender)

// Routes
routes(app)

// start app
app.listen(PORT, (error) => {
  if (error) {
    return logger.error(error)
  }

  return logger.info(`Backend is running on port: ${PORT}!`)
})

export default app
