import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from '../../webpack.config'

export default (PORT) => {
  const server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    inline: true,
    quiet: false,
    noInfo: true,
    stats: { colors: true }
  })

  server.listen(PORT, 'localhost', (err) => {
    if (err) {
      return console.log(err) // eslint-disable-line no-console
    }

    return console.log(`WebPack DevServer listening at http://localhost:${PORT}/`) // eslint-disable-line no-console
  })
}
