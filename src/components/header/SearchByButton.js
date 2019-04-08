import React from 'react'

const SearchByButton = props => {
  return (
    <button
      className={`button ${props.isActive ? 'button_active' : ''}`}
      value={props.value}
      onClick={() => props.toggleButtonsState(props.value)}
    >
      {props.value}
    </button>
  )
}

export default SearchByButton
