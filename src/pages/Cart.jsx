import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { IoIosRemoveCircleOutline } from 'react-icons/io'

export const Cart = () => {
  const {cart,invoice,removeCart} = useContext(ProductContext)
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
                  <p className='text-gray-500 text-xs hidden md:block'>{product.smallDescription}</p>
                  <p className='text-xs '>quantity: {product.quantity}</p>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-2 md:gap-10 lg:gap-20 xl:gap-25'>
                 <p className='font-semibold text-md'> ${product.price}</p>
                 <IoIosRemoveCircleOutline onClick={()=>removeCart(product)}  className='text-red-600 text-2xl cursor-pointer'/>
                </div>
                </div>
              )
            })
          }
          <div className='flex flex-col items-end gap-3 py-4'>
            <p className='font-bold'>Subtotal ({invoice.count} {invoice.count > 1 ?'items':'item' } ) : ${invoice.subTotal}</p>
            <button className='bg-blue-600 text-xs text-white p-2 w-[200px] rounded-md'>Place Order</button>
          </div>
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
