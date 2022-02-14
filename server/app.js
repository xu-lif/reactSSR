// 改写node的require方法，用来通过babel实时编译js代码


// const express = require('express')
import express from 'express'
import renderAppServer from './render'

const app = express()
app.use(express.static('build'))

app.get('*', function (req, res) {
  renderAppServer(req, res)
})

export default app