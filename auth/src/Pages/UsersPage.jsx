import { useContext } from "react"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Card } from '@mui/material';
import {PermissionContext} from "../Context/PermissionContext"


function UsersPage () {
  const {users} = useContext(PermissionContext) 
  const isLoggedUser = JSON.parse(localStorage.getItem("useLogedId"));
    return(
      <>
      <h1>Users List & Details</h1>
      <TableContainer component={Paper}>
        <Table>
           <TableHead style={{background:'rgb(21 22 22)'}}>
            <TableRow>
              <TableCell style={{color:"rgb(224 224 224)"}}>Id</TableCell>
              <TableCell style={{color:"rgb(224 224 224)"}}>Name</TableCell>
              <TableCell style={{color:"rgb(224 224 224)"}}>Game Access</TableCell>
              <TableCell style={{color:"rgb(224 224 224)"}}>CSV-File Access</TableCell>
              <TableCell style={{color:"rgb(224 224 224)"}}>Is Logged</TableCell>
            </TableRow>
           </TableHead>
           <TableBody>
            {users.map((user) =>(
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell style={{color:(user.gamePermission)?"green":"red"}}>
                  {user.gamePermission? "Yes":"Not Permitted"}
                  </TableCell>
                <TableCell style={{color:(user.csvPermission)?"green":"red"}}>
                  {user.csvPermission? "Yes":"Not Permitted"}
                  </TableCell>
                <TableCell style={{color:(isLoggedUser.id===user.id)?"green":"red"}}>
                  {(isLoggedUser.id===user.id)? "Online":"Offline"}
                  </TableCell>
              </TableRow>
            ))}
           </TableBody>
        </Table>
        </TableContainer>
        </>
    )
}

export default UsersPage
