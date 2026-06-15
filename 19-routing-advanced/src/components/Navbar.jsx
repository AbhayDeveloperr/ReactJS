import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-cyan-800 justify-between items-center'>
      <h2 className='text-2xl font-medium'>Guru</h2>
      <div className='flex gap-8'>
        <Link className='text-lg font-bold' to='/'>Home</Link>
        <Link className='text-lg font-bold' to='/about'>About</Link>
        <Link className='text-lg font-bold' to='/courses'>Courses</Link> 
        <Link className='text-lg font-bold' to='/contact'>Contact</Link> 
      </div>

    </div>
  )
}

export default Navbar
