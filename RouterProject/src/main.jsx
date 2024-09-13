import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home'
import About from './Components/About'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   
  </StrictMode>,
)
