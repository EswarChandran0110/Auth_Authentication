
// src/App.js
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import { PermissionProvider, PermissionContext } from './Context/PermissionContext';
import LoginPage from './Pages/LoginPage';
import TicTacPage from './Pages/TicTacPage';
import CsvPage from './Pages/CsvPage';
import PermissionPage from './Pages/PermissionPage';
import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Layout from './Layout/Layout'
import UsersPage from './Pages/UsersPage'

function PrivateGameRoute({children}) {
  const { gameAuth } = useContext(PermissionContext);
  return children
}
function PrivateCsvEditRoute({children}) {
  const { csvAuth } = useContext(PermissionContext);
  return children
}


const router = createBrowserRouter([
  {
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<PrivateCsvEditRoute>
                 <CsvPage/>
                </PrivateCsvEditRoute>
        ,
      },
      {
        path:"/users",
        element:<UsersPage/>,
      },
      {
        path:"/authorization",
        element:<PermissionPage/>,
      },
      {
        path:"/game",
        element: <PrivateGameRoute>
                  <TicTacPage/>
                </PrivateGameRoute>
        ,
      },
   ],
  },
  {
    path:"/login",
    element:<LoginPage/>,
  },
])


function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;