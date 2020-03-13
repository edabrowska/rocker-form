import React from 'react'

import { Input } from './TextField.shards'

import { InputRoot, InputWrapper, ErrorMsg } from '../Form/Form.shards'

import { Label } from '../Label/Label'

export const TextField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error, invalid, valid }
}) => {
  const showError = (input.value && invalid) || (touched && invalid)

  return (
    <InputRoot>
      <Label
        label={label}
      />
      <InputWrapper>
        <Input
          {...input}
          type={type}
          placeholder={placeholder}
          error={showError}
          success={valid}
        />
        {showError && <ErrorMsg>{error}</ErrorMsg>}
      </InputWrapper>
    </InputRoot>
  )
}