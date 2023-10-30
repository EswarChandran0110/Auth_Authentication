// src/components/Login.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PermissionContext } from '../Context/PermissionContext';

export const userData = [
  { id: 1, name: 'User 1', password: 'password1', gamePermission: false, csvPermission: false },
  { id: 2, name: 'User 2', password: 'password2', gamePermission: false, csvPermission: false },
  { id: 3, name: 'User 3', password: 'password3', gamePermission: false, csvPermission: false },
  { id: 4, name: 'User 4', password: 'password4', gamePermission: false, csvPermission: false },
  { id: 5, name: 'User 5', password: 'password5', gamePermission: false, csvPermission: false },
];

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setGameAuth, setCsvAuth,gameAuth,csvAuth } = useContext(PermissionContext);

  const handleLogin = () => {
    // Find a user with matching username and password
    const user = userData.find((user) => user.name === username && user.password === password);

    if (user) {
      localStorage.setItem("useLogedId",JSON.stringify(user))
      setGameAuth(user.gamePermission);
      setCsvAuth(user.csvPermission);
      console.log("gameAuth",gameAuth)
      console.log("csvAuth",csvAuth)
      navigate("/authorization")
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
