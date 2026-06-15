import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='nav'>
        <h2>Guru</h2>
        <div>
          {/* Reload nhi hoga ab */}
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
