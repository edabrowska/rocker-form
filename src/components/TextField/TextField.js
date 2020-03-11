import React from 'react'

export const TextField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error }
}) => (
    <div>
      <label>
        <span>* </span>
        {label}
      </label>
      <div error={error}>
        <input
          {...input}
          type={type}
          placeholder={placeholder}
        />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )