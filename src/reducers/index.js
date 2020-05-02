import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import app from './app'
import ui from './ui'
import rule from './rule'

const reducer = combineReducers({
  routing: routerReducer,
  app,
  ui,
  rule,
})

export default reducer
