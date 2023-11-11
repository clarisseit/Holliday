import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {Dna} from "react-loader-spinner";

export default function login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("yoo", Email, Password);
    setIsLoading(true);
    axios({
      method: "POST",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/login",
      data: {
        email: Email,
        password: Password,
      },
    })
      .then((response) => {
        //user
        localStorage.setItem("user", JSON.stringify(response.data.user));
        const user = localStorage.getItem("user");
        console.log(user);

        //token

        localStorage.setItem("token", response.data.access_token);
        const token = localStorage.getItem("token");
        console.log(token);

        console.log(response);
        toast.success("Login successfull");
        localStorage.setItem("token", response.data.access_token);
        setTimeout(() => {
          if (response.data.user.role == "admin") {
            navigate("/Dashboard");
          } else {
            navigate("/");
          }
        }, 5000);
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
        <div className="login-container">
          <ToastContainer className="toast" />
          <h2 className="loginrespo">Login</h2> <br />
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
          <button className=" bg-custom border-dashed text-2xl"
            onClick={handleSubmit}
            type="submit"
            value="Login"
            onChange={(e) => setPassword(e.target.value)}
          >
            {isLoading ? (
              <Dna
                visible={true}
                height={80}
                width={80}
                ariaLabel="dna-loading"
              />
            ) : (
              "login"
            )}
          </button>
          <p>___________or login with_________</p>
          <div className="mb-6">
            <button className="bg-custom text-white p-2 rounded cursor-pointer hover:bg-red-700">
              Google
            </button>
            <span className="mx-2">or</span>
            <button className="bg-custom text-white p-2 rounded cursor-pointer hover:bg-blue-700">
              Facebook
            </button>
          </div>
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
