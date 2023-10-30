
import React, { createContext, useState, useContext } from 'react';

export const PermissionContext = createContext();

export const PermissionProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'User 1', gamePermission: false, csvPermission: false },
    { id: 2, name: 'User 2', gamePermission: false, csvPermission: false },
    { id: 3, name: 'User 3', gamePermission: false, csvPermission: false },
    { id: 4, name: 'User 4', gamePermission: false, csvPermission: false },
    { id: 5, name: 'User 5', gamePermission: false, csvPermission: false },
  ]);

  const updateUserPermissions = (userId, route, value) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, [`${route}Permission`]: value } : user
      )
    );
  };

  return (
    <PermissionContext.Provider value={{ users, updateUserPermissions }}>
      {children}
    </PermissionContext.Provider>
  );
}



