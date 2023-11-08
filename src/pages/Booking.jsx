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
import { BiMenuAltRight } from "react-icons/bi";
import { GrAddCircle } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import ReactPaginate from "react-paginate";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function () {
  const navigate = useNavigate();
  const [booking, setBooking] = useState([]);
  const [pageNumber, setNumber] = useState(0);

  const bookingPerPage = 10;
  const pagesVisited = pageNumber * bookingPerPage;

  const displayBooking = booking
    .slice(pagesVisited, pagesVisited + bookingPerPage)
    .map((item) => {
      console.log(item, "item");
      return (
        <tr className=" flex gap-10 text-center ">
          <td className=" flex flex-row text-center">{item.fullname}</td>
          {/* <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.date}</td>
          <td>{item.numberOfTickets}</td>
          <td>
            <div className="actions">
              <button
                onClick={() => {
                  navigate(`/EditBooking/${item._id}`);
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
          </td> */}
        </tr>
      );
    });

  const fetchBooking = () => {
    let token = localStorage.getItem("token");
    console.log(token);

    axios({
      method: "GET",

      url: "https://holiday-planner-4lnj.onrender.com/api/v1/booking/view",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setBooking(response.data);

      console.log(response.data);
    });
  };

  useEffect(() => {
    fetchBooking();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      let token = localStorage.getItem("token");
      axios({
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/${id}`,
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
          console.log(id, "id");
          console.log(token, "token");
        });
    }
  };
  // const pageCount = Math.cell()
  return (
    <div>
      {/* <ArrayTour/> */}
      <div className="alldash">
        <ToastContainer />

        <h1 className=" mr-80font-bold text-4xl text-custom">Booking</h1>

        <div className="addtours">
          <Link to="/FormDash">
            {/* <button className="addtoursin">
              <GrAddCircle />
              Booking Now
            </button> */}
          </Link>
        </div>

        <table className="dashtable">
          <tbody>
            <tr>
              <td>FullName</td>
              <td>Email</td>
              <td>PhoneNumber</td>
              <td>Date</td>
              <td>NumberOfTickets</td>

              <td>Actions</td>
            </tr>
            {displayBooking}
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
