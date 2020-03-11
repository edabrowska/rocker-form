import { GET_COUNTRIES } from '../consts'

const initialState = {
  countries: []
}

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return Object.assign({}, state, {
        countries: state.countries.concat(action.payload)
      })

    default:
      return state
  }
}

export default countriesReducer
