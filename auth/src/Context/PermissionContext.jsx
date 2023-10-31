// PermissionContext.js
import React, { createContext, useEffect, useState } from 'react';


export const userData = [
  { id: 1, name: 'User 1', password: 'password1', gamePermission: false, csvPermission: false },
  { id: 2, name: 'User 2', password: 'password2', gamePermission: false, csvPermission: false },
  { id: 3, name: 'User 3', password: 'password3', gamePermission: false, csvPermission: false },
  { id: 4, name: 'User 4', password: 'password4', gamePermission: false, csvPermission: false },
  { id: 5, name: 'User 5', password: 'password5', gamePermission: false, csvPermission: false },
];

export const PermissionContext = createContext();

 const PermissionProvider = ({ children }) => {
  const [users, setUsers] = useState(userData);

  const [gameAuth, setGameAuth] = useState(false);
  const [csvAuth, setCsvAuth] = useState(false);

  const loggedUser = JSON.parse(localStorage.getItem("useLogedId"))
  // console.log(loggedUser)
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
    if (loggedUser) {
      users.map(el => {
      if (el.name === loggedUser.name) {
        // console.log("el.csvPermission",el.csvPermission)
        // console.log("el.gamePermission",el.gamePermission)
        setCsvAuth(el.csvPermission)
        setGameAuth(el.gamePermission)
      }
    })
  }
  }, [users])
  
 
  return (
    <PermissionContext.Provider value={{ users, updateUserPermissions, gameAuth, setGameAuth, csvAuth, setCsvAuth }}>
      {children}
    </PermissionContext.Provider>
  );
};
export default PermissionProvider;
