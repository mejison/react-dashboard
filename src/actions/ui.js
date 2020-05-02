import * as types from './types'

export const setUiKey = (key, data) => ({
	type: types.SET_UI_KEY,
	key,
	data,
})

export const toggleModal = (show = false, title = '', content = null, className = '') => dispatch => {
	let resolver = null
	const promise = new Promise((resolve, reject) => {
		resolver = resolve
	})
	dispatch({
		type: types.TOGGLE_MODAL,
		data: {show, title, content, className, resolver},
	})
	return promise
}

export const closeModal = () => ({
	type: types.CLOSE_MODAL,
})
