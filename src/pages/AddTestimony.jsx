import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function AddTestimony() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  // const{isLoading, setIsLoading} = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // setIsLoading(true);
    console.log("yoo");

    axios({
      method: "POST",
      url: "https://holiday-api-zj3a.onrender.com/api/v1/auth/signup",
      data: {
        email: Email,
        fullName: FirstName + LastName,
        password: Password,
      },
    })
      .then((response) => {
        console.log(response);
        // alert("sign up successfull");
        localStorage.setItem("token", response.data.access_token);

        toast.success("signup sucessfully!");
        setTimeout(() => {
          navigate("/Dash");
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
        // alert("An error happened");
        toast.error("Failed to signup!");
      });

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };
  return (
    <div>
      <div className="alllogin">
        <h1 className="hidesignup">hide</h1>
        <div className="login-container">
          <ToastContainer className="toast" />
          <h2 className="signuprespo">Sign Up</h2>
          {/* <p>If you don't have account</p> */}
          <form className="loginwidth" />
          <input
            value={FirstName}
            type="text"
            name="username"
            placeholder="FirstName"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <p>{FirstName}</p>
          <br />
          <input
            value={LastName}
            type="text"
            name="username"
            placeholder="LastName"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
          <p>{LastName}</p>
          <br />
          <input
            value={Email}
            type="text"
            name="username"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{Email}</p>
          <br />
          <input
            value={Password}
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{Password}</p>
          <br /> <br />
          <input
            onClick={handleSubmit}
            type="submit"
            value="Sign Up"
          />
          <br /> <br />
          <p>___________or login with_________</p> <br />
          <button className="loginicon"> Google</button> or
          <button className="loginicon">FaceBook</button>
          <form />
          <div className="imgsign1">
            <img
              className="imgsign1"
              src="login.JPG"
              alt="Image 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
