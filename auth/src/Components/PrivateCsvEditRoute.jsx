import { useContext } from "react";
import { PermissionContext } from "../Context/PermissionContext";
import { Navigate } from "react-router-dom";

function PrivateCsvEditRoute({children}) {
    const { csvAuth } = useContext(PermissionContext);
    if(!csvAuth){
        return(<Navigate to ="/authorization"/>)
    }
    return children
  }
  export default PrivateCsvEditRoute;