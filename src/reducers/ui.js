import * as types from '../actions/types'

const initialState = {
  modal: {
    show: false,
    content: null,
    title: '',
    className: '',
    resolver: null,
  },
}

const ui = (ui = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_UI_KEY:
      return Object.assign({}, ui, {
        [action.key]: action.data
      })
    case types.TOGGLE_MODAL:
      return Object.assign({}, ui, {
        modal: action.data,
      })
    case types.CLOSE_MODAL:
      return Object.assign({}, ui, {
        modal: {...ui.modal, show: false},
      })
    default:
      return ui
  }
}

export default ui