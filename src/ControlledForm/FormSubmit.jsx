import React from 'react'
import FormContext from './FormContext'

const btnStyle = {
  backgroundColor: 'darkolivegreen',
  border: 'none',
  color: 'white',
  fontSize: '1rem',
  padding: '8px 16px'
}

const disabledBtnStyle = {
  ...btnStyle,
  opacity: '0.5'
}

const FormSubmit = ({ children }) => (
  <FormContext.Consumer>
    {({ isComplete }) => (
      <button
        style={isComplete ? btnStyle : disabledBtnStyle}
        disabled={!isComplete}
      >
        Submit
      </button>
    )}
  </FormContext.Consumer>
)

export default FormSubmit
