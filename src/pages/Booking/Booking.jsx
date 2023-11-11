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
import { ThreeCircles } from "react-loader-spinner";
import axios from "axios";
import styles from "./booking.module.css";
export default function () {
  const navigate = useNavigate();
  const [booking, setBooking] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const bookingPerPage = 10;
  const pagesVisited = pageNumber * bookingPerPage;

  const displayBooking = booking
    .slice(pagesVisited, pagesVisited + bookingPerPage)
    .map((item) => {
      console.log(item, "item");
      return (
        <tr>
          <td>{item.fullname}</td>

          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.date}</td>
          <td>{item.numberOfTickets}</td>
          <td>
            <span className={styles.actionss}>
              <AiFillEdit
                className={styles.deleteBtn}
                onClick={() => {
                  navigate(`/EditBooking/${item._id}`);
                }}
              />

              <AiFillDelete
                className={styles.editButtonns}
                onClick={() => handleDelete(item._id)}
              
              />
            </span>
          </td>
        </tr>
      );
    });
  const [isLoading, setIsLoading] = useState(false);
  const fetchBooking = () => {

    let token = localStorage.getItem("token");
    console.log(token);
 setIsLoading(true);
    axios({
      method: "GET",

      url: "https://holiday-planner-4lnj.onrender.com/api/v1/booking/view",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setBooking(response.data);

      console.log(response.data);
       setIsLoading(false);
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
  const pageCount = Math.ceil(booking.length / bookingPerPage);

  const changePage = ({selected}) => {
      setPageNumber(selected)
  };
  return (
    <div>
      {isLoading ? (
        <ThreeCircles
          height="600"
          width="500"
          margin-right="auto"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=" bg-custom mr-24"
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      ) : (
        <div className={styles.sidebarRightSideee}>
          <h1 className="">Booking</h1>
          <table className={styles.tablee}>
            <thead>
              <tr className={styles.trBooking}>
                <th>FullName</th>
                <th>Email</th>
                <th>PhoneNumber</th>
                <th>Date</th>
                <th>NumberOfTickets</th>
                <th className={styles.Actionf}>Actions</th>
              </tr>
            </thead>
            <tbody>{displayBooking}</tbody>
          </table>
          <div className={styles.downn}>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationButton"}
              previousLinkClassName={"previousButton"}
              nextLinkClassName={"nextButton"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}
