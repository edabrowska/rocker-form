import { GET_COUNTRIES, GET_FORM_DATA, DELETE_FORM_DATA } from '../consts'

import {
  getDataFromLS,
  removeFormFromLS,
  saveCountriesToLS
} from '../../utils/localStorage'

const allCountries = 'https://restcountries.com/v3.1/all'

export const getCountries = () => {
  return function (dispatch) {
    const countriesDataFromLS = getDataFromLS('countriesData')

    if (countriesDataFromLS) {
      return dispatch({ type: GET_COUNTRIES, payload: countriesDataFromLS })
    } else {
      return fetch(allCountries)
        .then(response => response.json())
        .then(json => {
          const countriesOption = json.reduce((acc, curr) => {
            acc.push({
              label: curr.name,
              value: curr.name
            })
            return acc
          }, [])
          saveCountriesToLS(countriesOption)
          dispatch({ type: GET_COUNTRIES, payload: countriesOption })
        })
    }
  }
}

export const getFormData = () => {
  return {
    type: GET_FORM_DATA,
    payload: getDataFromLS('contactFormData')
  }
}

export const deleteFormData = () => {
  return {
    type: DELETE_FORM_DATA,
    payload: removeFormFromLS()
  }
}
