import React from 'react'
import Select from 'react-select'

export const SelectField = ({
  input,
  label,
  options,
  placeholder,
  meta: { touched, error }
}) => (
    <div>
      <label>
        <span>* </span>
        {label}
      </label>
      <div error={error}>
        <Select
          {...input}
          options={options}
          placeholder={placeholder}
          value={input.value}
          onBlur={() => input.onBlur(input.value)}
        />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )