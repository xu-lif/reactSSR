// import { Configuration } from 'webpack'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const path = require('path')

// /**
//  * @type Configuration
//  */
const config = {
  entry: './src/app-client.js',
  output: {
    path: path.join(__dirname, './build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html')
    })
  ]
}

module.exports = config