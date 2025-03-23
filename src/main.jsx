import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Product } from './pages/Product.jsx'
import { Cart } from './pages/Cart.jsx'
import { Success } from './pages/Success.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/:category?',
        element:<Product />
      },
      {
        path:'/cart',
        element:<Cart />
      },
      {
        path:'/success',
        element:<Success />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
