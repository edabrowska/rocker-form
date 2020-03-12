import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import countriesReducer from './countries'
import formDataReducer from './form-data'

const rootReducer = combineReducers({
  form: formReducer,
  countriesField: countriesReducer,
  formData: formDataReducer
})

export default rootReducer
