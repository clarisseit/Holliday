

import axios from "axios";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
const TourForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [Price, setPrice] = useState("");
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
  const handleForm = (e) => {
    //console.log("Hello");
    e.preventDefault();
  

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
                    className="form-label"
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
                    placeholder="Enter the number of size"
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
                </div>
              </td>
              <td>
                <div className="form-column">
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
                    placeholder="Enter your destination"
                  />

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
                    Duration
                  </label>
                  <input
                    type="text"
                    id="duration"
                    className="form-input"
                    value={Price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter Price"
                  />
                </div>
              </td>
            </tr>
          </table>
          <button
            className="form-button"
            onClick={handleForm}
          >
            Add Tour
          </button>
        </form>
      </div>
    </div>
  );
};
export default TourForm;