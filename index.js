/**
 * Script de Inicialização
 */

if (process.env.NODE_ENV === 'production') {
  process.env.webpackAssets = JSON.stringify(require('./dist/manifest.json')) // eslint-disable-line
  process.env.webpackChunkAssets = JSON.stringify(require('./dist/chunk-manifest.json')) // eslint-disable-line

  // In production, serve the webpacked server file.
  require('./dist/server.bundle.js') // eslint-disable-line
} else {
  // Babel polyfill to convert ES6 code in runtime
  require('babel-register')({ // eslint-disable-line
    plugins: [
      [
        'babel-plugin-webpack-loaders',
        {
          config: './webpack.config.babel.js',
          verbose: false
        }
      ]
    ]
  })
  require('babel-polyfill') // eslint-disable-line
  require('./src/server/app') // eslint-disable-line
}
