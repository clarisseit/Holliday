import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate, useParams } from "react-router-dom";
const EditTour = () => {
  const navigate = useNavigate();
  const params = useParams();
  let tourId = params.id;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");

  const [initialTour, setInitialTour] = useState({});

  const fetchTour = () => {
    console.log("haha");
    let token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement?fieldName=_id&value=${tourId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setTitle(response?.data?.title);
        setDestination(response?.data?.destination);
        setDuration(response?.data?.duration);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTour();
  }, []);

  const handleImage = (e) => {
    e.preventDefault();
    console.log(e.target.files, "file");
    setImage(e.target.files[0]);
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log("Ru");

    let token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("backdropImage", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("duration", duration);
    formData.append("destination", destination);

    axios({
      method: "PUT",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/update/${tourId}`,
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
      {/* <div className=" ">
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
              <p>Update tour</p>
            </button>
          </div>
        </form>
      </div> */}

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
                    placeholder="Enter the title"
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
                </div>
              </td>
            </tr>
          </table>
          <button
            className="form-button"
            onClick={handleForm}
          >
            Update Tour
          </button>
        </form>
      </div>
    </div>
  );
};
export default EditTour;