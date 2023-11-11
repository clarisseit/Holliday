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
import { BiMenuAltRight } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import { ThreeCircles } from "react-loader-spinner";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./tourdash.module.css"

export default function () {
  const navigate = useNavigate();
  const [tours, setTours] = useState([]);
const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const toursPerPage = 2;
  const pagesVisited = pageNumber * toursPerPage;

  const displayTours = tours
    .slice(pagesVisited, pagesVisited + toursPerPage)
    .map((item) => {
      return (
        
        <tr>
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
          <td>{item.Price}</td>
          <td>{item.action}</td>
          <td>
            <span className={styles.actionss}>
              <AiFillEdit
                className={styles.deleteBtn}
                onClick={() => {
                  navigate(`/editTour/${item._id}`);
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

  const fetchTours = () => {
    let token = localStorage.getItem("token");
    console.log(token);
     setIsLoading(true);
    axios({
      method: "GET",

      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setTours(response.data);
      console.log(response.data);
      console.log("tour");
       setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      let token = localStorage.getItem("token");
      axios({
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/deleteAll?fieldName=_id&value=${id}`,
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

  const pageCount = Math.ceil(tours.length / toursPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
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
          <h1 className=" text-3xl -ml-100">Tours</h1>

          <Link to="/FormDash">
            <button className=" flex gap-2 bg-custom cursor-pointer">
              <GrAddCircle />
              Add Tours
            </button>
          </Link>

          <table className={styles.tablee}>
            <thead>
              <tr className={styles.trBooking}>
                <td>Destination Image</td>
                <td>Destination</td>
                <td>Duration</td>
                <td>Group Size</td>
                <td>Price</td>
                <td className={styles.Actionf}>Actions</td>
              </tr>
            </thead>
            <tbody>{displayTours}</tbody>
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
