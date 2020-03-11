import React from 'react'
import Select from 'react-select'

export const SelectField = ({
  label,
  options,
  placeholder,
  meta: { touched, error }
}) => (
    <div>
      <label>{label}</label>
      <div error={error}>
        <Select
          options={options}
          placeholder={placeholder}
        />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )