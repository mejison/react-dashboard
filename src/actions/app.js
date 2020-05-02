import * as types from './types'

export const setAppState = (state, payload) => ({
	type: types.SET_APP_STATE,
	state,
	payload,
})
