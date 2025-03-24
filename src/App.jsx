

import './App.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'

function App() {


  return (
   
      <div className='h-auto bg-slate-200'>
        <Navbar />
        <div className='w-[80%] m-auto my-4 bg-white'>
           <Outlet />
        </div>
      </div>
     
   
  )
}

export default App
