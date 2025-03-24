import {  createContext, useState } from "react";
import { products_data } from "../data/products";


export const ProductContext=createContext([]);

export const ProductContextProvider=({children})=>{
    const [products,setProducts]=useState(products_data)
    return(
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}