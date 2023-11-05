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
import { BiMenuAltRight } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

//  here i'm going to setdelete //  here i'm going to setdelete//  here i'm going to setdelete//  here i'm going to setdelete

//  here i'm going to setdelete//  here i'm going to setdelete//  here i'm going to setdelete//  here i'm going to setdelete//  here i'm going to setdelete

export default function () {
  const navigate = useNavigate();
  const [tours, setTours] = useState([]);

  const fetchTours = () => {
    let token = localStorage.getItem("token");
    console.log(token);

    axios({
      method: "GET",

      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users",
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

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      let token = localStorage.getItem("token");
      axios({
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/delete/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          toast.success("Item deleted successfully");
          console.log(response, "Response");
        })
        .catch((error) => {
          toast.error(error.response.data.message);
          console.log(error, "Error");
        });
    }
  };

  return (
    <div>
      {/* <ArrayTour/> */}
      <div className="alldash">
        <ToastContainer />

        <Link to="/DashMenu">
          <p className=" flex flex-row font-bold gap-3 text-4xl text-custom">
            Dashboard Menu <BiMenuAltRight />
          </p>
        </Link>
        
          <h2 className=" ml-100 font-bold text-4xl text-custom"> Users</h2>
        

        <table className="dashtable">
          <tbody>
            <tr>
              <td>Email</td>

              <td>Full Name</td>
              <td>Location</td>
              <td>Role</td>
              <td>Actions</td>
            </tr>
            {tours.map((item) => {
              return (
                <tr className="titletable">
                  <td>{item.email}</td>

                  <td>{item.phoneNumber}</td>
                  <td>{item.fullName}</td>
                  <td>{item.location}</td>
                  <td>{item.role}</td>
                  <td>
                    <div className="actions">
                      <button
                        onClick={() => {
                          // navigate(`/EditUser/{email}`);
                          navigate(`/EditUser/${item._id}`);
                        }}
                        className="editdash"
                      >
                        <AiFillEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="reddelete"
                      >
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
