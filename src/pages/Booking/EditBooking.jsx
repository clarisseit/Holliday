import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate, useParams } from "react-router-dom";
const EditBooking = (id) => {
  const navigate = useNavigate();
  const params = useParams();
  let book_ID = params.id;

  const [tourID, setTourID] = useState("");
  const [userID, setUserID] = useState("");
  const [isPayed, setIsPayed] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const [initialTour, setInitialTour] = useState({});

  const fetchTour = () => {
    console.log("haha");
    let token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setTourID(response?.data?.tourID);
        setUserID(response?.data?.userID);
        setIsPayed(response?.data?.isplayed);
        setPaymentMethod(response?.data?.paymentMethod);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTour();
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    console.log("Ru");

    let token = localStorage.getItem("token");

    const formData = new FormData();

    formData.append("tourID", tourID);
    formData.append("userID", userID);
    formData.append("isPayed", isPayed);
    formData.append("paymentMethod", paymentMethod);

    axios({
      method: "PUT",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/update${id}`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/DashTour");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  return (
    <div className="">
      <ToastContainer />

      <div className="form-container">
        <form className="form">
          <table className="form-table">
            <tr>
              <td>
                <h2 className="tourform">Booking Form</h2>
                <div className="form-column">
                  <label
                    htmlFor="title"
                    className="form-label"
                  >
                    Tour ID
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-input"
                    value={tourID}
                    onChange={(e) => setTourID(e.target.value)}
                    placeholder="Enter your Email Please"
                  />

                  <label
                    htmlFor="description"
                    className="form-label"
                  >
                    UserID
                  </label>
                  <input
                    type="text"
                    id="description"
                    className="form-input"
                    value={userID}
                    onChange={(e) => setUserID(e.target.value)}
                    placeholder="Enter your description"
                  />
                </div>
              </td>
              <td>
                <div className="form-column">
                  <label
                    htmlFor="destination"
                    className="form-label"
                  >
                    IsPayed
                  </label>
                  <input
                    type="text"
                    id="destination"
                    className="form-input"
                    value={isPayed}
                    onChange={(e) => setIsPayed(e.target.value)}
                    placeholder="Enter your Locatiion"
                  />

                  <label
                    htmlFor="duration"
                    className="form-label"
                  >
                    PaymentMethod
                  </label>
                  <input
                    type="text"
                    id="duration"
                    className="form-input"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    placeholder="Enter your Role"
                  />
                </div>
              </td>
            </tr>
          </table>
          <button
            className="form-button"
            onClick={handleForm}
          >
            Add Booking
          </button>
        </form>
      </div>
    </div>
  );
};
export default EditBooking;
