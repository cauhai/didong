import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom"
import { App } from '@capacitor/app'
import Home from './Home'
import Duck from './Duck'
import Kit from './Kit'

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/duck", element: <Duck /> },
  { path: "/kit/:n", element: <Kit /> },
])

const AppUrlListener = () => {
  let history = useNavigate();
  useEffect(() => {
    App.addListener('appUrlOpen', (event) => {
      // Example url: https://didong.netlify.app/kit/2
      // slug = /kit/2
      const slug = event.url.split('.app').pop();
      console.log('slug is ', event.url)
      if (slug) {
        history.push(slug);
      }
      // If no match, do nothing - let regular routing
      // logic take over
    });
  }, []);
  return null;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}>
      <AppUrlListener></AppUrlListener>
      <Home />
    </RouterProvider>

)





/*
TO DO: Dec 2023
- emulator no good, dont use it
- so far the app is open upon https://didong.netlify.app
- but with https://didong.netlify.app/kit/2 the app still 
  opens on home page
- need to grab the parameter and redirect to correct "/kit/2" page

https://github.com/cauhai/didong
netlify: Mangluoi-88

*/
