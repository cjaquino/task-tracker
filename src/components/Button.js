import React from 'react'

const Button = ({ color, text}) => (
  <button style={{ backgroundColor: color }} className='btn'>
    {text}
  </button>
)
export default Button