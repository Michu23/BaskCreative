import React from 'react'
import { Link } from 'react-router-dom'

const NavIcon = () => {
    const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
    
        <div className="nav-icon">
            <div className="hamburger-bar"></div>
        </div>
    
    </>
  )
}

export default NavIcon