import PostRoutes from './modules/Posts'
import logger from './util/logger'

function Routes(app) {
  app.all('*', (req, res, next) => {
    logger.info({
      method: req.method,
      path: req.path,
      body: req.body
    }, 'Route')
    next()
  })

  app.use('/api', PostRoutes)
  return app
}

export default Routes
