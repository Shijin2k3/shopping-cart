import {  createContext, useState } from "react";
import { products_data } from "../data/products";


export const ProductContext=createContext([]);

export const ProductContextProvider=({children})=>{
    const [products,setProducts]=useState(products_data)
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

    return(
        <ProductContext.Provider value={{products,filterProducts}}>
            {children}
        </ProductContext.Provider>
    )
}