import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

export const Cart = () => {
  const {cart} = useContext(ProductContext)
  return (
    <div className=''>
      {
        cart.length>0?
        <div>
          {
            cart.map(product=>{
              return(
                <div key={product.id} className='flex items-center shadow-lg p-4 gap-4'>
                 <img src={product.image}
                alt={product.name} className='w-[120px] h-[120px] object-contain'
                />
                 <div className='flex flex-col gap-2 my-4  w-[450px]'>
                  <p className=' font-bold'>{product.name}</p>
                  <p className='text-gray-500 text-xs'>{product.smallDescription}</p>
                  <p className='text-xs '>quantity: {product.quantity}</p>
                </div>
                 <p className='font-semibold'> $ {product.price}</p>
                </div>
              )
            })
          }
        </div>
        :
        <div className='flex items-center text-2xl justify-center p-4 gap-3'>
           <span>Empty</span> 
           <FaShoppingCart className='text-2xl cursor-pointer'/>
          <Link className='text-blue-700' to={'/'}> Add Products</Link>
        </div>
      }
    </div>
  )
}
