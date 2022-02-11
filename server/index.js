console.log('ssr')
const app = require('./app')
// 起一个express服务，监听端口
// 对于服务端的请求：
//    首先routes得到当前路由的component，请求数据，更新store，
      // const store = createStore(reducer, initState)
      // const componentString = reactDom.renderToString(
      //   <Provider value={store}>
      //     <StaticRouter>
      //       <Home />
      //     </StaticRouter>
      //   </Provider>
      // )
      // res.send(htmlString)
