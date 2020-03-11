import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import countriesReducer from './countries'

const rootReducer = combineReducers({
  form: formReducer,
  countriesField: countriesReducer
})

export default rootReducer
