import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./Componentes/auth/Login";
import Signup from "./Signup";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";  

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/teste",
    element: <Signup />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
