import React,{ useState } from 'react'
import "./game.css";
import Axios from "axios";
import Cookies from "universal-cookie"
import { Link } from 'react-router-dom';

function Login({setIsAuth}) {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const cookies = new Cookies();
    const login = () => {
      Axios.post("http://localhost:3001/login", {
        username,
        password,
      }).then((res) => {

        if (res?.data && res?.data?.userId){
        const { firstName, lastName, username, token, userId } = res.data;
        cookies.set("token", token);
        cookies.set("userId", userId);
        cookies.set("username", username);
        cookies.set("firstName", firstName);
        cookies.set("lastName", lastName);
        setIsAuth(true);
        }else{
          alert("Username Not Found");
        }
      })
      
    };
  return (
    <div className="login">
        <div className='login-input'>
    <label> Login</label>

    <h2>Username</h2><input
      placeholder="Username"
      onChange={(event) => {
        setUsername(event.target.value);
      }}
    />
    <h2>Password</h2>
    <input
      placeholder="Password"
      type="password"
      onChange={(event) => {
        setPassword(event.target.value);
      }}
    />
    <button onClick={login}> Login</button>
    <p>don't have account <Link to={"/signup"}>SignUp</Link> </p>
    </div>
    
  </div>
  )
}

export default Login