import {  createContext, useEffect, useState } from "react";
import { products_data } from "../data/products";


export const ProductContext=createContext([]);

export const ProductContextProvider=({children})=>{
    const [products,setProducts]=useState(products_data)
    const [cart,setCart]=useState([])
    const [invoice,setInvoice]=useState({count:0,subTotal:0})
    const [message,setMessage]=useState('')

    // add to cart
    const addCart=(product)=>{
        setMessage(`${product.name} added to cart`)
        setCart((oldCart)=>{
            let previous=[...oldCart];
            if(previous.length<1){
                previous.push({...product,quantity:1})
            }
            else{
                const isProduct=previous.find(prod=>prod.id == product.id)
                if(!isProduct){
                    previous.push({...product,quantity:1})
                }
                else{
                    previous=previous.map(prod =>{
                       return prod.id === isProduct.id ? {...isProduct,quantity:isProduct.quantity+1}:prod;
                    })
                }
            }
            return previous;
        })
    }
    //remove cart
    const removeCart=(product)=>{
        setMessage(`${product.name} removed from the cart`)
        setCart(oldCart =>{
            let previous =[...oldCart]
            const isProduct=previous.find(prod=>prod.id == product.id)
            if(isProduct){
                const index=previous.indexOf(isProduct)
                previous.splice(index,1)
            }
            
            return previous
        })
    }
    // filtering category
    const filterProducts=(category)=>{
        if(category){
        const filteredProducts=products_data.filter(product=>{
         if( product.category === category){
            return product
         }
        })
        setProducts(filteredProducts)
    }else{
        setProducts(products_data)
    }
    }

    const setInvoiceData=()=>{
        setInvoice((previous)=>{
            let newInvoice={...previous,count:0,subTotal:0}
            cart.forEach(product => {
                newInvoice.count += product.quantity;
                newInvoice.subTotal += product.quantity * product.price;
            })
           return newInvoice
        })

    }
    useEffect(()=>{
        const timeout=setTimeout(()=>{setMessage('')},1000)
       setInvoiceData()
       return ()=>{clearTimeout(timeout)}
    },[cart])

    return(
        <ProductContext.Provider value={{products,filterProducts,addCart,removeCart,invoice,setInvoice,cart,setCart}}>
           {message && <div className="fixed rounded-md shadow-lg right-0 top-20 bg-green-500 text-white min-w-[300px] p-2 text-center"> {message}</div>}
            {children}
        </ProductContext.Provider>
    )
}