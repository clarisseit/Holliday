import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CgCalendarDates } from "react-icons/cg";
import { BiSolidMap } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdGroupRemove } from "react-icons/md";
import { BiEnvelope } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { BiSolidArrowToTop } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa";
import styles from "./tourList.module.css";

const TourList = () => {
  const [tourLists, setTourLists] = useState([]);
  let token = localStorage.getItem("token");
  console.log(tourLists);
  useEffect(() => {
    const fetchTourList = () => {
      axios({
        method: "GET",
        url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour",
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
        .then((Response) => {
          console.log(Response, "response");
          setTourLists(Response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchTourList();
  }, [token]);

  return (
    <div className={styles.container}>
      <div
        style={{
          backgroundImage:
            "url(https://html.geekcodelab.com/holiday-planners/assets/images/tour-banner.jpg)",
        }}
        className={styles.topContainer}
      >
        <h1 className="tourlistcss">Tour List</h1>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.sortContainer}>
            <div className={styles.center}>
              <p>Sort by:</p>
            </div>
            <select className={`${styles.center} ${styles.sortSelector}`}>
              <option value="vacation">Release Date</option>
              <option value="business">Tour Date</option>
              <option value="adventure">Title</option>
              <option value="family">Price</option>
              <option value="business">Popularity</option>
              <option value="adventure">Rating</option>
              <option value="family">Duration</option>
            </select>
            <select className={`${styles.center} ${styles.sortSelector}`}>
              <option value="vacation">Descending</option>
              <option value="business">Ascending</option>
            </select>
          </div>
          <div className="flex flex-row gap-12 flex-wrap">
            {tourLists.map((tour) => (
              <div
                key={tour.id}
                className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8"
              >
                <div className="flex">
                  <img
                    className="w-full"
                    src={tour.backdropImage}
                    alt={tour.Title}
                  />
                </div>

                <div className="mt-4">
                  <div className="text-lg font-semibold">
                    {tour.destination}
                  </div>
                  <div className="mt-2">
                    <p className="text-base font-medium">{tour.Title}</p>
                    <p className="text-sm">{tour.Description}</p>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-base font-semibold">Duration</h3>
                      <p className="text-sm">{tour.Duration}</p>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">Group Size</h3>
                      <p className="text-sm">{tour.GroupSize}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xl font-semibold">{tour.Price}</p>
                    <Link
                      to={`/tourDetails/${tour._id}`}
                      className=" bg-custom text-white px-4 py-2 rounded-full hover:bg-black"
                    >
                      Book now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rightContainer}>
          <h1>FIND YOUR TOUR</h1>
          <div className={styles.formInput}>
            <BiSolidMap className={styles.inputIcon} />
            <input
              className={styles.input}
              type="text"
              placeholder="Search..."
            />
          </div>
          <br />
          <div>
            <div
              className={styles.sortContainerMonth}
              for="month"
            ></div>
            <select
              className={`${styles.center} ${styles.sortSelector}`}
              id="month1"
              name="month"
            >
              <CgCalendarDates />
              <option
                className=" text-2xl"
                value="Any"
              >
                Choose Month
              </option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <div
              className=" flex gap-7 text-center mt-9 text-2xl"
              for="minPrice"
            >
              Min Price
              <input
                className={`${styles.centerPrice} ${styles.sortSelectorPrice}`}
                type="number"
                id="minPrice"
                name="minPrice"
                class=" flex"
              />
            </div>
            <div
              className=" flex gap-7 text-center mt-9 text-2xl"
              for="maxPrice"
            >
              Max Price
              <input
                className={`${styles.centerPrice} ${styles.sortSelectorPrice}`}
                type="number"
                id="maxPrice"
                name="maxPrice"
                class=" flex"
              />
            </div>
            <br />
            <div className="activitiessmall">
              <div className=" flex flex-col text-2xl">
                <div className=" text-2xl">Activities:</div>
                <br />
                <input
                  className=" text-2xl"
                  type="checkbox"
                  id="cultural"
                  name="activity"
                  value="Cultural"
                />
                <div for="cultural">Cultural</div>
                <br />
                <input
                  type="checkbox"
                  id="adventure"
                  name="activity"
                  value="Adventure"
                />
                <div for="adventure">Adventure</div>
                <br />
                <input
                  type="checkbox"
                  id="historical"
                  name="activity"
                  value="Historical"
                />
                <div for="historical">Historical</div>
                <br />
                <input
                  type="checkbox"
                  id="seaside"
                  name="activity"
                  value="Seaside"
                />
                <div for="seaside">Seaside</div>
                <br />
                <input
                  type="checkbox"
                  id="discovery"
                  name="activity"
                  value="Discovery"
                />
                <div for="discovery" /> Discovery
              </div>
            </div>
          </div>
          <br />
          <button>
            {/* <Link to={`/tourDetails/${tour._id}`}>Book now</Link> */}
            <input
              className=" ml-2 hover:bg-black"
              type="submit"
              class="submit-button"
              value="FIND NOW"
            />
          </button>
          <br /> <br /> <br />
          <div className=" bg-custom1">
            <h2 className=" font-bold text-center mt-11 text-2xl">
              WHY BOOK WITH US?
            </h2>{" "}
            <div className=" flex flex-col text-2xl mt-8 ml-12 mb-16">
              <p className=" flex gap-5">
                <FaGreaterThan />
                Best Price Guarantee
              </p>
              <p className=" flex gap-5">
                <FaGreaterThan />
                Customer care available 24/7
              </p>
              <p className=" flex gap-5">
                <FaGreaterThan />
                Free Travel Insureance
              </p>
              <p className=" flex gap-5">
                <FaGreaterThan />
                Hand-picked Tours & Activities
              </p>
            </div>
          </div>
          <br /> <br /> <br />
          <div className=" bg-custom">
            <h2 className="font-bold text-center mt-11 text-2xl">
              <b className="linef1co">|</b>GET A QUESTION?
            </h2>{" "}
            <br />
            <p className="flex flex-col text-2xl mt-8 ml-12 mb-16 text-col text-fuchsia-200">
              Do not hesitage to give us a call. We are <br /> an expert team
              and we are happy to talk <br /> to you.
            </p>
            <div className="flex flex-col text-2xl mt-8 ml-12 mb-16 space-x-9 text-fuchsia-200">
              {/* <div className="none">
                <p className="flex flex-col mb-9 text-4xl">
                  <BiEnvelope />
                  holidayplanners@gmail.com
                </p>
              </div> */}
              <p className="flex flex-col mb-9 text-4xl">
                <BsTelephoneFill />
                +123 456 7890
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <nav className="footer">
          <div className="respfooter">
            <p className="footer2">
              <b className="bold">
                <b className="b">H</b>olliday
                <b className="b">P</b>
                lanner
              </b>
              <br /> <br />
              <b className="i">
                Holiday Planners sit amet consectetur
                <br />
                <p className="iresponse">
                  adipisicing elit. Perferendis sapiente <br />
                  tenetur officiis explicabo fugit, sit <br />
                  mollitia eum atque excepturi quaerat autem.
                </p>
              </b>
              <br /> <br />
              <div>
                <input
                  className="aa"
                  type="eml"
                  id="email2"
                  name="email"
                  required
                />
                <button
                  className="aa1"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Send Your Message
                </button>{" "}
              </div>
              <br /> <br />
              <div className="pay">
                <p>
                  <FaCcPaypal />
                </p>
                <p>
                  <SiAmericanexpress />
                </p>
                <p>
                  <FaCcVisa />
                </p>
                <p>
                  <FaCcMastercard />
                </p>
              </div>
            </p>
          </div>

          <div className="navigation">
            <p className="nav">Navigation</p>
            <p>_______________________________</p>
            <br />
            <ul className="listf">
              {/* <li>Home</li> */}
              <Link to="/">Home Page</Link> <br></br>
              <Link to="/TourList">TourList Page</Link> <br />
              <Link to="/TourDetails">TourDetails Page</Link> <br />
              <Link to="/LoginPage">Login Page</Link> <br />
              <Link to="/AddTestimony">Sign Up Page</Link> <br />
              <Link to="/Dash">Dashboard</Link> <br />
            </ul>
          </div>

          <div className="helpff">
            <p className="help2">Need Help ?</p>
            <p>________________________________</p>
            <p className="footer12">
              <b className="linef">|</b> Call Us <br /> +123 456 7890
            </p>
            <p className="footer12">
              <b className="linef">|</b>Email for Us <br />{" "}
              holidayplanners@gmail.com
            </p>
            <p className="footer12">
              <b className="linef">|</b>Location <br />
              Main Street, Victoria 8007.
            </p>
            <p className="footer12">
              <b className="linef">|</b>Follow us <br />
              <GrTwitter /> <FaCcPaypal />
            </p>
          </div>
        </nav>
        <p className="linebottom">
          ________________________________________________________________________________________________________________________________________________________________________________________________________________
        </p>
        <div className="down">
          <p>
            Copyright © 2023 <b className="c">clarisse.</b> All Rights Reserved
          </p>

          <p>Privacy Policy Terms of Use Cookie Policy</p>
          <button
            className="clicktop"
            onClick={() => {
              navigate("/login");
            }}
          >
            <BiSolidArrowToTop />
            Top
          </button>
        </div>

        <div />
      </div>
    </div>
  );
};

export default TourList;
