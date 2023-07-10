import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import delle pagine 
import Error from './routes/error'
import Location from './routes/location'
import Home from './routes/home'
import About from './routes/about'
import Contacts from './routes/contacts'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
  },
  {
    path: "/location",
    element: <Location />,
  },
  {
    path:"/location/:id",
    element: <Location/>
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contacts",
    element: <Contacts/>,
  },

  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
