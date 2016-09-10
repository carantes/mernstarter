import Express from 'express'
import compression from 'compression'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import path from 'path'

// Webpack Requirements
import webpack from 'webpack'
import config from '../../webpack.config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

// Defaults
const PORT = process.env.PORT || 3000
const ENV = process.env.NODE_ENV || 'development'
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter'
const PUBLIC_PATH = config.output.publicPath

// Initialize the Express App
const app = new Express()

// Run Webpack dev server in development mode
if (ENV === 'development') {
  const compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: PUBLIC_PATH }))
  app.use(webpackHotMiddleware(compiler))
}

// Import required modules
import frontend from './routes/frontend.routes'
import posts from './routes/post.routes'
import dummyData from './dummyData'

// Set native promises as mongoose promise
mongoose.Promise = global.Promise

// MongoDB Connection
mongoose.connect(MONGO_URL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!') // eslint-disable-line no-console
    throw error
  }

  // feed some dummy data in DB.
  dummyData()
})

// Apply body Parser and server public assets and routes
app.use(compression())
app.use(bodyParser.json({ limit: '20mb' }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }))
app.use(Express.static(path.resolve(__dirname, '../dist')))

// Server Routes (API)
app.use('/api', posts)

// Client Routes (React)
app.use(frontend)

// start app
app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Express server is running on port: ${PORT}!`) // eslint-disable-line
  }
})

export default app
