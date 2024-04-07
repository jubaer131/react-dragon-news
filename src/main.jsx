import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './assets/routs/Router'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>

  </React.StrictMode>,
)
