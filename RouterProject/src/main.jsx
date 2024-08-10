import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home'
import About from './Components/About'

const router = createBrowserRouter([
  {
    path:'/',
    Element: <Layout/>,
    Children:[
      {
        path:"",
        Element: <Home/> 
      },
      { 
        path:"about",
        element: <About/>
      },
      {}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={ router} />
  </StrictMode>,
)
