import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Router/Router'
import AuthProvider from './Components/AuthProvider/AuthProvider'
import { ThemeProvider } from './Components/Pages/ThemeContext'


createRoot(document.getElementById('root')).render(
  <ThemeProvider>
 <AuthProvider>
   <RouterProvider router={router}>
   </RouterProvider>
 </AuthProvider>
 </ThemeProvider>
)
