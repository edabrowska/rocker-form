import { GET_COUNTRIES, GET_FORM_DATA, DELETE_FORM_DATA } from '../consts'

import {
  getFromLocalStorage,
  removeFromLocalStorage
} from '../../utils/localStorage'

const allCountries = 'https://restcountries.eu/rest/v2/all'

export const getCountries = () => {
  return function (dispatch) {
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
        dispatch({ type: GET_COUNTRIES, payload: countriesOption })
      })
  }
}

export const getFormData = () => {
  return {
    type: GET_FORM_DATA,
    payload: getFromLocalStorage()
  }
}

export const deleteFormData = () => {
  return {
    type: DELETE_FORM_DATA,
    payload: removeFromLocalStorage()
  }
}