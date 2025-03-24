import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

export const Product = () => {
  const {products}=useContext(ProductContext)

  return (
    <div className='flex flex-wrap gap-6 py-5' >
      {
        products.map(product =>{
          return(
            <div key={product.id} className='w-[200px]  p-4 mx-auto hover:shadow-lg' >
               <img src={product.image}
                alt={product.name}
                className='w-[200px] h-[150px] object-contain block m-auto'/>
                {/* Product Info */}
                <div className='flex flex-col gap-2 my-4  h-[120px]'>
                  <p className='text-center font-bold'>{product.name}</p>
                  <p className='text-center text-sm'>$ {product.price}</p>
                  <p className='text-xs text-gray-500'> {product.smallDescription}</p>
                </div>
                <button className='w-full bg-blue-700 text-white text-center text-xs p-2 rounder-lg'>+ Add to Cart</button>
            </div>
          )
        })
      }
    </div>
  )
}
