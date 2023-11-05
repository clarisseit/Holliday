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
import { FaUsers as UserIcon } from "react-icons/fa";

import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../App.css";
import "../styles/Menu.css";

import { BiMenuAltRight } from "react-icons/bi";
export default function Menu() {
  return (
    <div className=" bg-slate-500 w-100 h-100 mb">
      <Link
        className=" flex flex-row gap-9 mt-60 font-bold text-4xl hover:text-custom"
        to="/Dash"
      >
        <RiDashboardLine /> Dashboard
        <AiOutlineRight />
      </Link>{" "}
      <br /> <br />
      <Link
        className=" flex flex-row gap-9  font-bold text-4xl hover:text-custom"
        to="/DashTour"
      >
        <BiSolidPlaneAlt />
        Tour
        <AiOutlineRight />
      </Link>
      <br /> <br />
      <Link
        className=" flex flex-row gap-9  font-bold text-4xl hover:text-custom"
        to="/Booking"
      >
        <LuBookOpenCheck /> Bookings <AiOutlineRight />
        <br /> <br />
      </Link>
      <Link
        className=" flex flex-row gap-9  font-bold text-4xl hover:text-custom"
        to="/UserDash"
      >
        <UserIcon /> Users
        <AiOutlineRight />
      </Link>
      {/* <Link to="/">
        <button className=" flex flex-row gap-9 mt-60 font-bold text-4xl hover:text-custom">
          <AiOutlineCloseCircle />
        </button>
      </Link> */}
    </div>
  );
}
