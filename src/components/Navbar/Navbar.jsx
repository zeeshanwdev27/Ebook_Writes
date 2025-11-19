import React from 'react'

function Navbar() {
  return (
    <div className='py-5 flex justify-evenly items-center w-full'>

        {/* Logo */}
        <img src="/logo.png" alt="Newyour_Publisher_Logo" className='w-40 h-10' />

        {/* Menu */}
        <ul className='flex gap-5 justify-center items-center'>
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>

        {/* Call To Action */}
        <div className='flex justify-center items-center gap-5'>
            <button>+000000000</button>
            <button className='p-3 rounded-md border'>Chat With Us</button>

        </div>
      
    </div>
  )
}

export default Navbar




/**
 * Book Marketing
 * Book Writing
 * Book Publishing
 */