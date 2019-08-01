import React from 'react'

const style = {
  color: 'red',
  display: 'block',
  fontSize: '16px',
  marginTop: '8px'
}

const FieldError = ({ children }) => (
  <span style={style}>{children || 'This field is required'}</span>
)

export default FieldError
