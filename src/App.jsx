

import './App.css'
import { Outlet, useParams } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { useContext, useEffect } from 'react';
import { ProductContext } from './context/ProductContext';

function App() {
  const {filterProducts}=useContext(ProductContext)
  const {category}=useParams();
  useEffect(()=>{
    filterProducts(category)
  },[category])

  return (
   
      <div className='min-h-screen h-auto bg-slate-200'>
        <Navbar />
        <div className='w-[80%] m-auto my-4 bg-white'>
           <Outlet />
        </div>
      </div>
     
   
  )
}

export default App
