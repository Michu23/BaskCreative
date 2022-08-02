import React from 'react'
import { Link } from 'react-router-dom'

const NavIcon = () => {
    const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
    
        <div class="nav-icon">
            <div class="hamburger-bar"></div>
        </div>
    
    </>
  )
}

export default NavIcon