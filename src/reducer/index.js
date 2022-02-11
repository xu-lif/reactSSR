import { combineReducers } from 'redux'
import homeReducer from '../container/Home/reducer'
import loginReducer from '../container/Login/reducer'

const reducer = combineReducers({
  home: homeReducer,
  login: loginReducer
})

export default reducer