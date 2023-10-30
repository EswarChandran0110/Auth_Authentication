// src/App.js
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import { PermissionProvider, PermissionContext } from './Context/PermissionContext';
import Login from './Pages/LoginPage';
import GamePage from './Pages/TicTacPage';
import CsvEditPage from './Pages/CsvPage';
import PermissionPage from './Pages/PermissionPage';

function PrivateGameRoute({children}) {
  const { gameAuth } = useContext(PermissionContext);

  console.log(gameAuth)
 
  if (!gameAuth) {
    return<Navigate to="/login" />;
  }
  

  return children
  
  
}

function PrivateCsvEditRoute({children}) {
  const { csvAuth } = useContext(PermissionContext);

  if (!csvAuth) {
    return <Navigate to="/login" />
  }
  return children
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <>
            <PrivateCsvEditRoute>
            <CsvEditPage />
            </PrivateCsvEditRoute>
          </>
        }
        />
      <Route
        path="/game"
        element={
          <>
            <PrivateGameRoute>
            <GamePage />
            </PrivateGameRoute>
          </>
        }
      />
      <Route path="/authorization" element={<PermissionPage />} />
    </Routes>
  );
}

export default App;