import * as types from '../actions/types'

const initialState = {
  data: {
  	title: ''
  },
}

const rule = (rule = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_RULE_DATA:
      return Object.assign({}, rule, {
      	data: {
      		...rule.data,
    		 	[action.key]: action.data,
      	}
      })
    default:
      return rule
  }
}

export default rule
