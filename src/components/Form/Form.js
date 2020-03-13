import React from 'react'
import { reduxForm, Field } from 'redux-form'

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
import { Label } from '../Label/Label'

const Form = props => {
  const { countries, invalid, submitting, handleSubmit } = props

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
      validate={required}
    />
    <Label
      label='All fields are mandatory'
      smaller
    />
    <Button
      type='submit'
      disabled={invalid || submitting}
    >
      Submit
    </Button>
  </FormRoot>
}

const ContactForm = reduxForm({
  form: 'contact',
  enableReinitialize: true
})(Form)

export default ContactForm