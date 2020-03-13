import React from 'react'
import Select from 'react-select'

import { customStyles } from './SelectField.shards'

import { InputRoot, InputWrapper, ErrorMsg } from '../Form/Form.shards'

import { Label } from '../Label/Label'

import { border } from '../../styles/theme/colors'

export const SelectField = ({
  input,
  label,
  options,
  placeholder,
  meta: { touched, error, invalid, valid }
}) => {
  const showError = (input.value && invalid) || (touched && invalid)

  return (
    <InputRoot>
      <Label
        label={label}
      />
      <InputWrapper>
        <Select
          {...input}
          options={options}
          placeholder={placeholder}
          value={input.value}
          onBlur={() => input.onBlur(input.value)}
          styles={customStyles}
          error={showError}
          success={valid}
          theme={theme => ({
            ...theme,
            colors: {
              ...theme.colors,
              ...border
            },
          })}
        />
        {showError && <ErrorMsg>{error}</ErrorMsg>}
      </InputWrapper>
    </InputRoot>
  )
}