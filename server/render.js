import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { matchRoutes } from 'react-router-config'

import Routes, { routes } from '../src/routes'
import reducer from '../src/reducer'

const renderHtml = (store, req, res) => {
  // 服务端渲染, 这里只是一个包含内容的html文档，不包含事件的绑定
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        <Routes />
      </StaticRouter>
    </Provider>
  )
  // 返回包含内容的html文档，且将store数据注入
  res.send(`
    <html>
      <head>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `)
}

const renderAppServer = function (req, res) {
  console.log('12')
  // 创建store
  const store = createStore(reducer, {})
  // 匹配routes中route，然后调用component中的静态方法请求数据,更新数据
  const promises = []
  // 匹配当前路由的数据
  const c = matchRoutes(routes, req.path)
  if (c && c.length) {
    c.forEach(val => {
      // 请求数据
      promises.push(val.route.component.queryData(store))
    })
  }
  Promise.all(promises).then(() => {
    renderHtml(store, req, res)
  }).catch(err => {
    res.send('出错了')
  })
  
}

module.exports = renderAppServer