import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import Home from './Home'
import Duck from './Duck'
import Kit from './Kit'

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/duck", element: <Duck /> },
  { path: "/kit", element: <Kit /> },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  </React.StrictMode>,
)