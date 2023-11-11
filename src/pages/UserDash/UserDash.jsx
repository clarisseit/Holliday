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
import ReactPaginate from "react-paginate";
import styles from "./userdash.module.css";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeCircles } from "react-loader-spinner";
export default function () {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  // pagination on user start
 const [pageNumber, setPageNumber] = useState(0);

 const usersPerPage = 10;
 const pagesVisited = pageNumber * usersPerPage;

 const displayUsers = users.slice(
   pagesVisited,
   pagesVisited + usersPerPage
 ).map((item) => {
      return (
  
<tr>
            <td>{item.email}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.fullname}</td>
            <td>{item.location}</td>
           <td>{item.role}</td>
          <td>

            <span className={styles.actionss}>
              <AiFillEdit
                className={styles.deleteBtn}
                onClick={() => {
                   navigate(`/EditUser/${item._id}`);
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
  
  //pagination on user end
 const [isLoading, setIsLoading] = useState(false);
  const fetchUsers = () => {
    let token = localStorage.getItem("token");
    console.log(token);
 setIsLoading(true);
    axios({
      method: "GET",

      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setUsers(response.data);

      console.log(response.data);
       setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchUsers();
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


const pageCount = Math.ceil(users.length / usersPerPage);

const changePage = ({ selected }) => {
  setPageNumber(selected);
};

  return (
    // <div>
    //   {/* <ArrayTour/> */}
    //   <div className="alldash">
    //     <ToastContainer />

    //     <h2 className=" ml-100 font-bold text-4xl text-custom"> Users</h2>

    //     <table className="dashtable">
    //       <tbody>
    //         <tr>
    //           <td>Email</td>

    //           <td>Full Name</td>
    //           <td>Location</td>
    //           <td>Role</td>
    //           <td>Actions</td>
    //         </tr>
    //         {displayUsers}{" "}
    //         <ReactPaginate
    //           previousLabel={"Previous"}
    //           nextLabel={"Next"}
    //           pageCount={pageCount}
    //           onPageChange={changePage}
    //           containerClassName={"paginationButton"}
    //           previousLinkClassName={"previousButton"}
    //           nextLinkClassName={"nextButton"}
    //           disabledClassName={"paginationDisabled"}
    //           activeClassName={"paginationActive"}
    //         />
    //         <br />
    //       </tbody>
    //     </table>

    //     <Link to="/">
    //       <p className="backhome">Go back to home</p>
    //     </Link>
    //   </div>
    // </div>

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
          <h1 className="">User</h1>
          <table className={styles.tablee}>
            <thead>
              <tr className={styles.trBooking}>
                <td>Email</td>
            <td>Full Name</td>
               <td>Location</td>
                <td>Role</td>
                <td className={styles.Actionf}>Actions</td>
              </tr>
            </thead>
            <tbody>{displayUsers}</tbody>
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
