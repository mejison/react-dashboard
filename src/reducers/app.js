import * as types from '../actions/types'

const initialState = {
  rules: [],
}

const app = (app = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_APP_STATE:
      return Object.assign({}, app, {
        [action.state]: action.payload,
      })
    default:
      return app
  }
}

export default app