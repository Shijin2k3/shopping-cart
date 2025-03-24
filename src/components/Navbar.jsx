import React from 'react'
import {FaYoutube} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { products_categories } from '../data/products'

export const Navbar = () => {
  return (
    <div className=' w-full h-20 bg-slate-200 border-none shadow-lg flex justify-between px-5 sticky  top-0 z-50 '>
      <div className='flex flex-col items-center mt-2'> 
        <FaYoutube className='text-red-500 text-4xl'/>
        <span>@Sk</span>
      </div>
      <ul className='flex items-center gap-10'>
        {products_categories.map((category,i)=>{
          return(
            <li key={i}><NavLink to={`/${category.value}`}>{category.value}</NavLink></li>
           
          )
        })}
        
      </ul>
      <div className=' flex items-center'>
        <FaShoppingCart className='text-2xl cursor-pointer'/>
      </div>
    </div>
  )
}
