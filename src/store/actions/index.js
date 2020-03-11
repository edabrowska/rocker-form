import { GET_COUNTRIES } from '../consts'

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
