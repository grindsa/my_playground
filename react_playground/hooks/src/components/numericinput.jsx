import React from 'react';

const regExp = /^\d*\.?\d*$/

export const NumericInput = (props) => {

  const handleInput = (event) => {
    const value = event.target.value
    if(regExp.test(value)){
      props.onChange(event);
    }
  }

  return(
    <input
      type='text'
      name={props.name}
      value={props.value}
      onChange={ (event) => handleInput(event) }
    />
  )
}
