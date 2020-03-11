import React, { useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'

import { FormRoot, Button } from './Form.shards'
import {
  required,
  ssnFormat,
  ssnChecksum,
  phoneNumber,
  email
} from './validation'

import { TextField } from '../TextField/TextField'
import { SelectField } from '../SelectField/SelectField'

import { getCountries } from '../../store/actions/index'

const Form = props => {
  const { countries, getCountries, pristine, invalid, submitting } = props

  useEffect(() => {
    getCountries()
  }, [])

  const handleSubmit = values => {

    console.log('Success', values)
  }
  console.log(props)
  return <FormRoot onSubmit={handleSubmit}>
    <h3>Contact form</h3>
    <Field
      name='ssn'
      component={TextField}
      type='text'
      label='Social security number'
      placeholder='Type in your social security number'
      validate={[required, ssnFormat, ssnChecksum]}
    />
    <Field
      name='phone'
      component={TextField}
      type='phone'
      label='Phone number'
      placeholder='Type in your number'
      validate={[required, phoneNumber]}
    />
    <Field
      name='email'
      component={TextField}
      type='email'
      label='Email address'
      placeholder='Type in your email'
      validate={[required, email]}
    />
    <Field
      name='countries'
      component={SelectField}
      label='Country'
      placeholder='Select your country'
      options={countries}
      validate={[required]}
    />
    <p><span>*</span> All fields are mandatory</p>
    <Button
      type='submit'
      disabled={pristine || invalid || submitting}
    >
      Submit
    </Button>
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
  form: 'contact',
})(ConnectedForm)

export default ContactForm