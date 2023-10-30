import { useState } from 'react'
import {Routes,Route} from "react-router-dom"
import LoginPage from './Pages/LoginPage'
import CsvPage from './Pages/CsvPage'
import TicTacPage from './Pages/TicTacPage'
import PermissionPage from './Pages/PermissionPage'
import UsersPage from './Pages/UsersPage'

// import './App.css'

function App() {
  

  return (
    <>
       <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<CsvPage/>}/>
        <Route path="/game" element={<TicTacPage/>}/>
        <Route path="/authorization" element={<PermissionPage/>}/>
        <Route path="/users" element={<UsersPage/>}/>
       </Routes>
    </>
  )
}

export default App
