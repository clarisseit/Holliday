import React, { useEffect, useState } from "react";
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
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";


import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



//  here i'm going to setdelete //  here i'm going to setdelete//  here i'm going to setdelete//  here i'm going to setdelete

//  here i'm going to setdelete//  here i'm going to setdelete//  here i'm going to setdelete//  here i'm going to setdelete//  here i'm going to setdelete

export default function () {
  const [tours, setTours] = useState([]);

  const fetchTours = () => {
    let token = localStorage.getItem("token");
    console.log(token);

    axios({
      method: "GET",
      
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setTours(response.data);

      console.log(response.data);
    });
  };

  useEffect(() => {
    fetchTours();
  }, []);

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
            <Link to="/FormDash">
              <FaUsers /> Users
              <AiOutlineRight />
            </Link>
          </p>
          <br />
          <br />
        </div>
        <div className="tours">
          <h1> Tours</h1>
        </div>
        <div className="addtours">
          <Link to="/FormDash">
            <button className="addtoursin">
              <GrAddCircle />Add Tours
            </button>
          </Link>
        </div>

        <table className="dashtable">
          <tbody>
            <tr>
              <td>Destination Image</td>
              <td>Destination</td>
              <td>Duration</td>
              <td>Group Size</td>
              <td>Price</td>
              <td>Actions</td>
            </tr>
            {tours.map((item) => {
              return (
                <tr className="titletable">
                  <td>
                    <img
                      src={item.backdropImage}
                      alt=""
                      className="backdropdest"
                    />
                  </td>
                  <td>{item.destination}</td>
                  <td>{item.Duration}</td>
                  <td>{item.destination}</td>
                  <td>{item.GroupSize}</td>
                  <td>{item.price}</td>
                  <td>{item.action}</td>
                  <td>
                    <div className="actions">
                      <button className="editdash">
                        <AiFillEdit />
                      </button>
                      <button className="reddelete">
                        <AiFillDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
            <br />
          </tbody>
        </table>

        <Link to="/">
          <p className="backhome">Go back to home</p>
        </Link>
      </div>
    </div>
  );
}
