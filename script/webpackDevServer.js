import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import devConfig from '../config/webpack.config.dev'

const webpackDevServer = (app) => {
  const compiler = webpack(devConfig)
  app.use(webpackDevMiddleware(compiler, {
    
  }))
}

module.exports = webpackDevServer