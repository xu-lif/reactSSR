import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Routes from './routes'
import reducer from './reducer'

// 创建store，并将从服务端带来的initState数据注入至store中保证前后端渲染的数据一致
const store = createStore(reducer, window.context.state)
console.log('store', store.getState())
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  )
}
ReactDom.hydrate(<App />, document.getElementById('root'))



