import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';
import { useContext } from 'react';
import { PermissionContext } from '../Context/PermissionContext';
function UserTable() {
    const { users, updateUserPermissions }= useContext(PermissionContext);
  const handlePermissionChange = (userId, route) => (event) => {
    updateUserPermissions(userId, route, event.target.checked);
  };
// console.log(users)
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>Game Permission</TableCell>
            <TableCell>CSV Edit Permission</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>
                <Checkbox
                  checked={user.gamePermission}
                  onChange={handlePermissionChange(user.id, 'game')}
                />
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={user.csvPermission}
                  onChange={handlePermissionChange(user.id, 'csv')}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;