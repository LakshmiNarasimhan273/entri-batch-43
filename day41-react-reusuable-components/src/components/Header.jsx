import React from 'react'
import Button from './Button'

function Header() {
    const title = "Click to Start"
  return (
    <div>
        <h3>Welcome to ChatMessage</h3>
        <Button name={title} />
    </div>
  )
}

export default Header