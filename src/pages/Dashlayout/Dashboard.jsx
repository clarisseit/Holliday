import React, { useEffect } from "react";
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

import { Link, Outlet } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


import { BiMenuAltRight } from "react-icons/bi";
import styles from "./Dashlayout.module.css";
export default function Dashboard() {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);

  useEffect(() => {
    console.log(userString);
    console.log(user);

    if (token && user.role == "user") {
      navigate("/");
    } else if (!token) {
      navigate("/LoginPage");
    }
  }, []);
  return (
    <div className={styles.bgYellow}>
      <div className={styles.bgBlueRight}>
        <img
          src="/hollidayplanner.JPG"
          alt=""
          className={styles.imgContact}
        />{" "}
        <br /> <br />
        <p className=" flex ml-11"> MAIN MENU</p>
        <br /> <br /> <br />
        <div className={styles.dashbordMenu}>
          <Link
            className={styles.dashbordMenuText}
            to="/dashboard/home"
          >
            <p className=" flex gap-2">
              {" "}
              <RiDashboardLine /> Dashboard
            </p>

            <AiOutlineRight className=" " />
          </Link>{" "}
          <br />
          <Link
            className={styles.dashbordMenuText}
            to="/Dashboard/Tour"
          >
            <p className=" flex gap-2 ">
              <BiSolidPlaneAlt />
              Tour
            </p>

            <AiOutlineRight className="  " />
          </Link>
          <br />
          <Link
            className={styles.dashbordMenuText}
            to="/Dashboard/Booking"
          >
            <p className=" flex gap-2">
              <LuBookOpenCheck /> Bookings
            </p>
            <AiOutlineRight className=" -mr-12" />
            <br /> <br />
          </Link>
          <Link
            className={styles.dashbordMenuText}
            to="/Dashboard/User"
          >
            <p className=" flex gap-2">
              <UserIcon /> Users
            </p>

            <AiOutlineRight className=" " />
          </Link>
          {/* <Link to="/">
        <button className=" flex flex-row gap-9 mt-60 font-bold text-4xl hover:text-custom">
          <AiOutlineCloseCircle />
        </button>
      </Link> */}
        </div>
      </div>

      <div className={styles.bgRedLeft}>
        <Outlet />
      </div>
    </div>
  );
}
