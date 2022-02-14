// 起本地server
// webpack-dev-middleware: webpack打包并且将打包后的文件交给dev server处理
// choosePort, dev server监听端口
// 所有的request，处理html并发给前端
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [ // 支持import('').then()
    'dynamic-import-node'
  ]
});

const express = require('express')
const { choosePort, prepareUrls } = require('react-dev-utils/WebpackDevServerUtils')
const openBrowser = require('react-dev-utils/openBrowser')
const clearConsole  = require('react-dev-utils/clearConsole')


const webpackDevServer = require('./webpackDevServer')

const devServer = express()

const HOST = '0.0.0.0'
const DEFAULT_PORT = 8006

webpackDevServer(devServer)

devServer.use((req, res) => {
  const app = require('../server/app');
  app(req, res);
});

choosePort(HOST, DEFAULT_PORT).then(port => {
  // 选中port
  clearConsole()
  const urls = prepareUrls('http', HOST, port)
  devServer.listen(port, HOST, (err) => {
    if (err) {
      process.exit(1)
    }
    console.log('start dev server....')
  })
  openBrowser(urls.localUrlForBrowser)
})




