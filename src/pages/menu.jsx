import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../App.css";
import "../styles/Menu.css";

import { BiMenuAltRight } from "react-icons/bi";
export default function Menu() {
  return (
    <div className="menumustbeblack">
      <Link to={"/"}>
        <p className="menulink">Home</p>
      </Link>

      <Link to={"/contact"}>
        <p className="menulink">Contact </p>
      </Link>
      <Link to={"/tourList"}>
        <p className="menulink">Tour</p>
      </Link>

      <Link to={"/addTestimony"}>
        <p className="menulink">SignUp</p>
      </Link>

      <Link
        className="menulink"
        to={"/LoginPage"}
      >
        {" "}
        Login
      </Link>

      <Link to={"/Dash"}>
        <p className="menulink">Dashboard</p>
      </Link>
      <Link to="/">
        <button className="closebtnmodal">
          <AiOutlineCloseCircle />
        </button>
      </Link>
    </div>
  );
}
