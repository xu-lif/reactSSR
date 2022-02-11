import React from 'react'
import { Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Home from './container/Home'
import Login from  './container/Login'

const routes = [
  {
    path: '/home',
    component: Home,
    exact: true
  },
  {
    path: '/login',
    component: Login,
    exact: true
  }
]

const Routes = () => {
  return (
    <div>
      <Switch>
        {
          renderRoutes(routes)
        }
      </Switch>
    </div>
  )  

}

export default Routes

export {
  routes
}