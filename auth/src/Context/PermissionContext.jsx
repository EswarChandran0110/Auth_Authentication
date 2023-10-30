// PermissionContext.js
import React, { createContext, useEffect, useState } from 'react';
import { userData } from '../Pages/LoginPage';

export const PermissionContext = createContext();

export const PermissionProvider = ({ children }) => {
  const [users, setUsers] = useState(userData);

  const [gameAuth, setGameAuth] = useState(false);
  const [csvAuth, setCsvAuth] = useState(false);

  const loggedUser = JSON.parse(localStorage.getItem("useLogedId"))
  const updateUserPermissions = (userId, route, value) => {
    // console.log("loggedUser",loggedUser.id)
    setUsers((prevUsers) => {
      return prevUsers.map((user) =>
        user.id === userId ? { ...user, [`${route}Permission`]: value } : user
      )
    }
    );
    // console.log("users",users)
  };
  useEffect(() => {
      users.map(el => {
      if (el.id === loggedUser.id) {
        setCsvAuth(el.csvPermission)
        setGameAuth(el.gamePermission)
      }
    })
  }, [users])
  console.log(gameAuth)
  console.log(csvAuth)
  return (
    <PermissionContext.Provider value={{ users, updateUserPermissions, gameAuth, setGameAuth, csvAuth, setCsvAuth }}>
      {children}
    </PermissionContext.Provider>
  );
};
