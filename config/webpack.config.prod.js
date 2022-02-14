const path = require('path')

// import { Configuration } from 'webpack'
// /**
//  * @type Configuration
//  */
const config = {
  entry: path.resolve(__dirname, '/src/app-client.js'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'indexProd.js',
    chunkFilename: '[name].bundle.js',
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
}

module.exports = config
