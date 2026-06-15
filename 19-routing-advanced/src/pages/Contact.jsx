import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div className='flex items-center justify-center gap-10 py-4'>
        <Link className='text-xl font-semibold' to='/contact/admin'>Admin</Link>
        <Link className='text-xl font-semibold' to='/contact/developer'>Developer</Link>
      </div>
      {/* <h1>Contact</h1> */}
      {/* Nested Routing ko define karne ke liye Outlet component ka use karte hai. Jaha par bhi Outlet component hoga, waha par nested route ka component render hoga. */}
      <Outlet/>
    </div>
  )
}

export default Contact
