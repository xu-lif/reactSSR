// 改写node的require方法，用来通过babel实时编译js代码
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [ // 支持import('').then()
    'dynamic-import-node'
  ]
});

const express = require('express')
const renderAppServer = require('./render')

const app = express()

app.use(express.static('build'))

app.get('*', function (req, res) {
  renderAppServer(req, res)
})

const port = 8002

app.listen(port, function () {
  console.log("Your app is running at port " + port);
})

module.exports = app