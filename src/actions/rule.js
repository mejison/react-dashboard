import * as types from './types'

export const setRuleData = (key, data) => ({
	type: types.SET_RULE_DATA,
	key,
	data,
})