import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";
import "./game.css"
import { Link } from "react-router-dom";



function SignUp({setIsAuth}) {
    const cookies = new Cookies();
    const [user, setUser] = useState(null);

    const signUp = () => {
        Axios.post("http://localhost:3001/signup", user).then((res)=>{
          const { token, userId, firstName, lastName, username, hashedPassword } =
          res.data;
        cookies.set("token", token);
        cookies.set("userId", userId);
        cookies.set("username", username);
        cookies.set("firstName", firstName);
        cookies.set("lastName", lastName);
        cookies.set("hashedPassword", hashedPassword);
        setIsAuth(true);
    });
    }
  return (
    <div className="login">
    <div className="login-input">
      <label> Sign Up</label>
      <h2>First Name</h2><input
        placeholder="First Name"
        onChange={(event) => {
          setUser({ ...user, firstName: event.target.value });
        }}
      />
      <h2>Last Name</h2><input
        placeholder="Last Name"
        onChange={(event) => {
          setUser({ ...user, lastName: event.target.value });
        }}
      />
      <h2>Username</h2><input
        placeholder="Username"
        onChange={(event) => {
          setUser({ ...user, username: event.target.value });
        }}
      />
      <h2>Password</h2><input
        placeholder="Password"
        type="password"
        onChange={(event) => {
          setUser({ ...user, password: event.target.value });
        }}
      />
      <button onClick={signUp}> Sign Up</button>
      <p>Already have account <Link to={"/login"}>Login</Link></p>
      </div>
      </div>
  )
}

export default SignUp