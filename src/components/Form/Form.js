import React, { useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'

import { FormRoot, Button } from './Form.shards'

import { SelectField } from '../SelectField/SelectField'

import { getCountries } from '../../store/actions/index'

const Form = props => {
  const { countries, getCountries } = props

  useEffect(() => {
    getCountries()
  }, [])

  const handleSubmit = values => {

    console.log('Success', values)
  }

  return <FormRoot onSubmit={handleSubmit}>
    <Field
      name='countries'
      component={SelectField}
      label='Country'
      placeholder='Select your country'
      options={countries}
    />
    <Button type='submit'>Submit</Button>
  </FormRoot>
}

const ConnectedForm = connect(
  state => ({
    countries: state.countriesField.countries
  }),
  dispatch => ({
    getCountries: () => dispatch(getCountries())
  })
)(Form)

const ContactForm = reduxForm({
  form: 'contact'
})(ConnectedForm)

export default ContactForm