import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Form from './Form'
import { saveToLocalStorage } from '../../utils/localStorage'

import {
  getCountries,
  getFormData,
  deleteFormData
} from '../../store/actions/index'

const FormContainer = props => {
  const {
    getCountries,
    countries,
    getFormData,
    deleteFormData,
    initialValues,
  } = props

  useEffect(() => {
    getCountries()
    getFormData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const printSuccess = () => {
    console.log('Success')
    deleteFormData()
  }

  return <Form
    onSubmit={printSuccess}
    onChange={saveToLocalStorage}
    countries={countries}
    initialValues={initialValues}
  />
}

const ConnectedForm = connect(
  state => ({
    countries: state.countriesField.countries,
    initialValues: state.formData
  }),
  dispatch => ({
    getCountries: () => dispatch(getCountries()),
    getFormData: () => dispatch(getFormData()),
    deleteFormData: () => dispatch(deleteFormData())
  })
)(FormContainer)

export default ConnectedForm