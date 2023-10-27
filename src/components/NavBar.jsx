// import React from "react";
// import { BiEnvelope } from "react-icons/bi";
// import { BsTelephoneFill } from "react-icons/bs";
// import { Link, useNavigate } from "react-router-dom";

// const NavBar = () => {
//   const navigate = useNavigate();

//   return (
//     <header>
//       <div className="headerl">
//         <div className="headee2">
//           <p className="email">
//             <BiEnvelope />
//             holliday planner@gmail.com <space>|</space>
//           </p>
//           <p className="phone">
//             <BsTelephoneFill />
//             +1234567890
//           </p>
//         </div>

//         <div className="header3">
         
//           <ul className="menu2">
//             <li>
//               <Link to="/">Home page</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact page</Link>
//             </li>

//             <li>
//               <Link to="/tourList">Tour List </Link>
//             </li>
//             <li>
//               <Link to="/tourDetails">
//                 Tour Detail
//               </Link>
//             </li>
//             <p></p>

//             <li>
//               <Link to="/LoginPage">Login Page</Link>
//             </li>
//             <li>
//               <Link to="/addTestimony">Sign Up</Link>
//             </li>
//             <li>
//               <Link to="/Dash">Dashboad</Link>
//             </li>
//            </ul>
//         </div>
//       </div>

//       {/* <button
//           onClick={() => {
//             navigate("/login");
//           }}
//         >
//           {/* Login */}
//     </header>
//   );
// };

// export default NavBar;


import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoSearchCircleOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";

import "../App.css";

function NavBar() {
  const [openModal, setOpen] = useState(false);

  const open = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <div className="navbar">
      <div className="upper">
        <div className="navemail">
          <FiMail className="navicon" />
          <a
            className="white"
            href=""
          >
            holidayplanners@gmail.com
          </a>{" "}
          <i className="navspace">fffff</i>
          <b className="white">|</b> <i className="navspace">fffff</i>
          <FiPhoneCall className="navicon" />
          <a
            className="white"
            href=""
          >
            +1234567890
          </a>
        </div>

        <div className="naviconfb">
          <a href="">
            <FaFacebookF className="iconn" />
            <b className="whitee">|</b>
            <FaInstagram className="iconn" />
            <b className="whitee">|</b>
            <FaTwitter className="iconn" />
          </a>
        </div>
      </div>
    
      <div className="navwhite">
        <img
          className="navimg1"
          src="../public/hollidayplanner.JPG"
        ></img>

        <div className="modalicon">
          <button className="reserve">Reserve</button>
          <i className="navsearch">
            <IoSearchCircleOutline />
          </i>
          <button
            className="navmenu"
            onClick={open}
          >
            <BiMenuAltRight />
          </button>
        </div>
      </div>

      {openModal && (
        <div className="openmodal ">
          <div className="navhome">
            <p className="home">
              <Link to={"/"}>
                <p onClick={close}>Home</p>
              </Link>
              <Link to={"/contact"}>
                <p onClick={close}>Contact </p>
              </Link>
              <Link to={"/tourList"}>
                <p onClick={close}>Tour</p>
              </Link>
              
              <Link to={"/addTestimony"}>
                <p onClick={close}>SignUp</p>
              </Link>
              <Link to={"/LoginPage"}>
                <p onClick={close}>Login</p>
              </Link>
              <Link to={"/Dash"}>
                <p onClick={close}>Dashboard</p>
              </Link>
              
            </p>
          </div>

          <button
            className="closebtnmodal"
            onClick={close}
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
      )}
    </div>
  );
}

export default NavBar;
