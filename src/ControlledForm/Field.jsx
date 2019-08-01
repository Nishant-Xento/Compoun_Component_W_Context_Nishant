import React from 'react'
import FormContext from './FormContext'
import FormRow from './FormRow'
import FieldError from './FieldError'

const labelStyle = {
  display: 'block',
  marginBottom: '8px'
}

const fieldStyle = {
  width: '100%',
  height: '36px',
  border: '1px solid #999',
  fontSize: '1rem',
  paddingLeft: '8px'
}

const fieldErrStyle = {
  ...fieldStyle,
  borderColor: 'red'
}

const TextField = ({ name, label, type }) => (
  <FormContext.Consumer>
    {({ fields, handlers }) => {
      const { error, required, touched, ...rest } = fields[name]
      return (
        <FormRow>
          {label && (
            <label style={labelStyle}>
              {label} <span>*</span>
            </label>
          )}
          <input
            type={type}
            name={name}
            {...rest}
            {...handlers}
            style={touched && error ? fieldErrStyle : fieldStyle}
          />
          {touched && error && <FieldError />}
        </FormRow>
      )
    }}
  </FormContext.Consumer>
)

export default TextField
