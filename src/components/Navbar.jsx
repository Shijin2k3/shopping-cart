import React from 'react'
import {FaYoutube} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

export const Navbar = () => {
  return (
    <div className='w-full h-20 border-none shadow-lg flex justify-between'>
      <div className='flex flex-col items-center mt-2'> 
        <FaYoutube className='text-red-500 text-4xl'/>
        <span>@Sk</span>
      </div>
      <ul className='flex items-center gap-10'>
        <li><NavLink>Mobile</NavLink></li>
        <li><NavLink>Tablet</NavLink></li>
        <li><NavLink>Laptop</NavLink></li>
      </ul>
      <div className=' flex items-center'>
        <FaShoppingCart className='text-2xl'/>
      </div>
    </div>
  )
}
