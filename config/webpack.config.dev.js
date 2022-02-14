// import { Configuration } from 'webpack'

// /**
//  * @type Configuration
//  */

const path = require('path')

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, '/src/app-client.js'),
  output: {
    path: path.resolve(__dirname, '/build'),
    filename: 'index.js',
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
    
  },
}

module.exports = config
