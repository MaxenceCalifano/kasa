import React from 'react';
import ReactDOM from 'react-dom/client';


import Root from './Pages/Root';
import Home from './Pages/Home';
import About from './Pages/About';
import Accommodation from './Pages/Accommodation';
import ErrorPage from './Pages/ErrorPage';

import './styles/index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/about",
        element: <About />
      },
      {
        path:"/accommodation/:id",
        element: <Accommodation />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);