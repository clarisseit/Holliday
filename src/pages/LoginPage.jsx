import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast} from 'react-toastify';

export default function login() {
  
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

   const handleSubmit = (e) => {
     e.preventDefault();
     console.log("yoo", Email, Password);

     axios({
       method: "POST",
       url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/login",
       data: {
         email: Email,
         password: Password,
       },
     })
       .then((response) => {
         console.log(response);
         toast.success("Login successfull");
         setTimeout(() => {
          navigate("/Dash");
         },5000);
         
       })
       .catch((error) => {
         toast.error("Failled");
       });

     setEmail("");
     setPassword("");
   };

  return (
    <div>
      <div className="alllogin">
        <h1 className="hidelogin">hide</h1>
        <div className="login-container">
          <ToastContainer className="toast" />
          <h2 className='loginrespo'>Login</h2> <br />
          <br />
          <p>
            If you don't have account
            <Link to="/addTestimony">Sign Up</Link>
          </p>{" "}
          <br />
          <form className="loginwidth" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br /> <br />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br /> <br />
          <br />
          <input
            onClick={handleSubmit}
            type="submit"
            value="Login"
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br /> <br /> <br />
          <p className="underloginresp">
            ___________or login with_________
          </p>{" "}
          <br />
          <br /> <br />
          <button className="loginicon">Google</button> or
          <button className="loginicon">FaceBook</button> <br />
          <form />
          <img
            className="imglogin"
            src="login.JPG"
            alt="Image 1"
          />
        </div>
      </div>
    </div>
  );
}