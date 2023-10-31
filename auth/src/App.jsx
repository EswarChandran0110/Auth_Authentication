
// src/App.js
import React from 'react';
import LoginPage from './Pages/LoginPage';
import TicTacPage from './Pages/TicTacPage';
import CsvPage from './Pages/CsvPage';
import PermissionPage from './Pages/PermissionPage';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Layout from './Layout/Layout'
import UsersPage from './Pages/UsersPage'
import PrivateGameRoute from './Components/PrivateGameRoute';
import PrivateCsvEditRoute from './Components/PrivateCsvEditRoute';



const router = createBrowserRouter([
  {
    element:<Layout/>,
    children:[
      {
        path:"/csv",
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
    path:"/",
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