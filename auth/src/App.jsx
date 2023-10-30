import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Layout from './Layout/Layout'
import CsvPage from './Pages/CsvPage'
import TicTacPage from './Pages/TicTacPage'
import LoginPage from './Pages/LoginPage'
import PermissionPage from './Pages/PermissionPage'
import UsersPage from './Pages/UsersPage'

// import './App.css'


const router = createBrowserRouter([
  {
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<CsvPage/>,
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
        element:<TicTacPage/>,
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

export default App
