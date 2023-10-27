import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { MdOutlinePlace } from "react-icons/md";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { LuBookOpenCheck } from "react-icons/lu";
import { PiCompassTool } from "react-icons/pi";
import { CgCalendarDates } from "react-icons/cg";
import { FaRocketchat } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import ArrayTour from "../components/ArrayTour";
import { Link, useNavigate } from "react-router-dom";

export default function herehrtrtrhhhhhhhhhhhhhhhhhh() {
  return (
    <div>
      {/* <ArrayTour/> */}
      <div className="alldash">
        <div className="dash1">
            <h1 className="hide">hide</h1>
          <img
            className="photoicon"
            src="hollidayplanner.JPG"
            alt="Image 1"
          />{" "}
          <br /> <br />
          <h2 className="mainmenu">MAIN MENU</h2> <br />
          <p className="dashred">{/* Dashboard  */}</p>
          <br />
          <p className="dashblack">
            <Link to="/Dash">
              <RiDashboardLine /> Dashboard <i className="ffff">ffffffffffff</i>
              <AiOutlineRight />
            </Link>{" "}
            <br /> <br />
            <Link to="/DashTour">
              <BiSolidPlaneAlt />
              Tour <i className="ffff">ffffffffffffffffffffff</i>
              <AiOutlineRight />
            </Link>
            <br /> <br />
            <Link to="/DashTour">
              <LuBookOpenCheck /> Bookings{" "}
              <i className="ffff">ffffffffffffff</i>
              <AiOutlineRight />
              <br /> <br />
            </Link>
            <Link to="/DashTour">
              <FaUsers /> Users <i className="ffff">fffffffffffffffffff</i>
              <AiOutlineRight />
            </Link>
          </p>
          <br />
          <br />
        </div>

       <h1 className="thisisdashboard">Hello, Clarisse</h1>
           
             
         


        <Link to="/">
          <p className="backhome">Go back to home</p>
        </Link>
      </div>
    </div>
  );
}
