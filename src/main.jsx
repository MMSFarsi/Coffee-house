import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import "./index.css";
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Coffees from './pages/Coffees';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/coffees",
        element:<Coffees></Coffees>
      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
