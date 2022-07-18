import React from 'react'

function Button(props) {
  const {className, onClick, buttonText}= props
  return (
    <>
        <button 
          className={className}
          onClick = {onClick}
        >
          {buttonText}
        </button>
    </>
  )
}

export default Button