

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
      <div className=" ">
        <form
          action="/"
          method="get"
          id="form"
          class=" "
        >
          <h2 className="">Tour Form</h2>
          <div className="">
            <div className="">
              <div className="">
                <label
                  htmlFor=""
                  className=""
                >
                  Title
                </label>
                <input
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  type="text"
                  id="name1"
                  class="  "
                  placeholder="Enter the title "
                  secondary
                />
              </div>
              <div className="">
                <label
                  htmlFor=""
                  className=""
                >
                  Description
                </label>
                <input
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  type="email"
                  id="email"
                  class=" "
                  placeholder="Enter your description"
                />
              </div>
            </div>
            <div className="">
              <div className="">
                <label
                  htmlFor=""
                  className=""
                >
                  Destination
                </label>
                <input
                  value={destination}
                  onChange={(e) => {
                    setDestination(e.target.value);
                  }}
                  type="text"
                  id="name1"
                  class=""
                  placeholder="Enter your destination "
                />
              </div>
              <div className="">
                <label
                  htmlFor=""
                  className=""
                >
                  Duration
                </label>
                <input
                  value={duration}
                  onChange={(e) => {
                    setDuration(e.target.value);
                  }}
                  type="email"
                  id="email"
                  class=""
                  placeholder="Enter your duration"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor=""
                className=""
              >
                Image
              </label>
              <input
                onChange={(e) => handleImage(e)}
                type="file"
                id="email"
                class=""
                placeholder="Enter your image"
              />
            </div>
            <button
              className=""
              onClick={handleForm}
            >
              <Link to="/DashTour">Add tour</Link>
              <p>Add tour</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default TourForm;