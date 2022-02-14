// 服务端和客户端分别打包
const webpack = require('webpack')

const prodConfig = require('../config/webpack.config.prod.js')
const serverConfig = require('../config/webpack.config.server.js')

const prodCompiler = webpack(prodConfig)
const serverCompiler = webpack(serverConfig)

// run：执行编译, err只会有webpack相关的错误，编译相关的错误在stats.errors(Array)中
prodCompiler.run((err, stats) => {
  if (err || serverStats.hasErrors()) {
    console.log('编译失败', err)
    return
  }
  console.log('client compiler complete')
  // 开始服务端代码编译
  serverCompiler.run((serverErr, serverStats) => {
    if (serverErr || serverStats.hasErrors()) {
      console.log('server编译失败', serverErr)
      return 
    }
    console.log('server compiler complete')
  })
})