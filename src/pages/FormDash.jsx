

import axios from "axios";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FidgetSpinner } from "react-loader-spinner";

import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
const TourForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [destination, setDestination] =useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [Price, setPrice] = useState("");
  const [GroupSize, setGroupSize] = useState("");
   const [Discount, setDiscount] = useState("");
    const [TourType, setTourType] = useState("");
     const [Departure, setDeparture] = useState("");
      const [Seats, setSeats] = useState("");
       const [fromMonth, setFromMonth] = useState("");
        const [toMonth, setToMonth] = useState("");
        const [departureTime, setDepartureTime] = useState("");
         const [ReturnTime, setReturnTime] = useState("");
        
  const handleImage = (e) => {
    e.preventDefault();
    console.log(e.target.files, "file");
    setImage(e.target.files[0]);
  };
  const formData = new FormData();
  formData.append("backdropImage", image);
  formData.append("title", title);
  formData.append("description", description);
  formData.append("duration", duration);
  formData.append("destination", destination);
  formData.append("Price", Price);
  formData.append("GroupSize", GroupSize);
  formData.append("Discount", Discount);
  formData.append("Departure", Departure);
  formData.append("Seats", Seats);
  formData.append("fromMonth", fromMonth);
  formData.append("toMonth", toMonth);
   formData.append("departureTime", departureTime);
  formData.append("ReturnTime", ReturnTime);
  
  const handleForm = (e) => {
    //console.log("Hello");
    e.preventDefault();
   setIsLoading(true);

    axios({
      method: "POST",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
         setIsLoading(false);
        setTimeout(() => {
          navigate("/tourDash");
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
                <h2 className="tourform">Tour Form</h2>
                <div className="form-column">
                  <label
                    htmlFor="image"
                    className=""
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    className="form-input"
                    onChange={(e) => handleImage(e)}
                    placeholder="Enter your image"
                  />

                  <label
                    htmlFor="title"
                    className="form-label"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter the  Title"
                  />

                  <label
                    htmlFor="duration"
                    className="form-label"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    id="duration"
                    className="form-input"
                    value={Price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter Price"
                  />

                  <label
                    htmlFor="destination"
                    className="form-label"
                  >
                    Destination
                  </label>
                  <input
                    type="text"
                    id="destination"
                    className="form-input"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="destination"
                  />

                  <label
                    htmlFor="description"
                    className="form-label"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    className="form-input"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter your description"
                  />

                  <label
                    htmlFor="duration"
                    className="form-label"
                  >
                    Discount
                  </label>
                  <input
                    type="text"
                    id="duration"
                    className="form-input"
                    value={Discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    placeholder="Discount"
                  />

                  <label
                    htmlFor="duration"
                    className="form-label"
                  >
                    Tour Type
                  </label>
                  <input
                    type="text"
                    id="duration"
                    className="form-input"
                    value={TourType}
                    onChange={(e) => setTourType(e.target.value)}
                    placeholder="Tour Type"
                  />
                </div>
              </td>

              {/* SECOND */}
              <td>
                <div className="form-column">
                  {/* <label
                    htmlFor="destination"
                    className="form-label"
                  > */}
                  {/* Destination */}
                  {/* </label> */}
                  {/* <input
                    type="text"
                    id="destination"
                    className="form-input"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="destination"
                  /> */}
                  <label
                    htmlFor="duration"
                    className="form-label"
                  >
                    Duration
                  </label>
                  <input
                    type="text"
                    id="duration"
                    className="form-input"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Enter your duration"
                  />
                  <label
                    htmlFor="duration"
                    className="form-label"
                  >
                    Group Size
                  </label>
                  <input
                    type="text"
                    id="duration"
                    className="form-input"
                    value={GroupSize}
                    onChange={(e) => setGroupSize(e.target.value)}
                    placeholder="Enter Group of Size"
                  />
                  {/* add */}
                  <label
                    htmlFor="duration"
                    className="form-label"
                  >
                    Departure
                  </label>
                  <input
                    type="text"
                    id="duration"
                    className="form-input"
                    value={Departure}
                    onChange={(e) => setDeparture(e.target.value)}
                    placeholder="Departure"
                  />
                  <label
                    htmlFor="duration"
                    className="form-label"
                  >
                    Seats
                  </label>
                  <input
                    type="text"
                    id="duration"
                    className="form-input"
                    value={Seats}
                    onChange={(e) => setSeats(e.target.value)}
                    placeholder="Number of Seats"
                  />
                  <label
                    htmlFor="duration"
                    className="form-label"
                  >
                    From Month
                  </label>
                  <input
                    type="text"
                    id="duration"
                    className="form-input"
                    value={fromMonth}
                    onChange={(e) => setFromMonth(e.target.value)}
                    placeholder=" From Month"
                  />
                  <label
                    htmlFor="duration"
                    className="form-label"
                  >
                    To Month
                  </label>
                  <input
                    type="text"
                    id="duration"
                    className="form-input"
                    value={toMonth}
                    onChange={(e) => setToMonth(e.target.value)}
                    placeholder="To Month"
                  />
                  <label
                    htmlFor="duration"
                    className="form-label"
                  >
                    To Month
                  </label>
                  <input
                    type="text"
                    id="duration"
                    className="form-input"
                    value={departureTime}
                    onChange={(e) => setDepartureTime(e.target.value)}
                    placeholder=" DepartureTime"
                  />

                  <label
                    htmlFor="duration"
                    className="form-label"
                  >
                    ReturnTime
                  </label>
                  <input
                    type="text"
                    id="duration"
                    className="form-input"
                    value={ReturnTime}
                    onChange={(e) => setReturnTime(e.target.value)}
                    placeholder="ReturnTime"
                  />
                </div>
              </td>
            </tr>
          </table>
          <button
            className="form-button"
            onClick={handleForm}
          >
            {isLoading ? (
              <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                ballColors={["#ff0000", "#00ff00", "#0000ff"]}
                backgroundColor="#F4442E"
              />
            ) : (
              "Add Tour"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
export default TourForm;