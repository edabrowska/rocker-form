import { GET_FORM_DATA, DELETE_FORM_DATA } from '../consts'

const initialState = {}

const formDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FORM_DATA:
      return Object.assign({}, state, action.payload)

    case DELETE_FORM_DATA:
      return {}

    default:
      return state
  }
}

export default formDataReducer
