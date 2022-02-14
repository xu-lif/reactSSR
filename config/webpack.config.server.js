const path = require('path')

// import { Configuration } from 'webpack'

// /**
//  * @type Configuration
//  */
const config = {
  entry: path.resolve(__dirname, '/server/app.js'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, '/node_modules')
      }
    ]
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
}

module.exports = config