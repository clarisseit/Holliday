import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { GiOpenBook } from "react-icons/gi";
import { ImLocation } from "react-icons/im";
import { FaUserTag } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { BsBookFill } from "react-icons/bs";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { BiSolidArrowToTop } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import { BiSolidMap } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { MdOutlineGroupAdd } from "react-icons/md";
import { FiSettings } from "react-icons/fi";




import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import styles from "./tourdatail.module.css";

const TourDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const tourId = params.id;
  console.log(tourId);

  //fetched data

  const [destination, setDestination] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [duration, setDuration] = useState("");

  const fetchTour = () => {
    const token = localStorage.getItem("token");
    console.log(token, "token");
    console.log(
      `https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement?fieldName=_id&value=${tourId}`,
      "Perfcet"
    );
    axios({
      method: "GET",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement?fieldName=_id&value=${tourId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data);

        setDestination(response?.data?.destination);
        setDuration(response?.data?.Duration);
        setGroupSize(response?.data?.GroupSize);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTour();
  }, []);

  // posted data

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [tickets, setTickets] = useState("");
  const [message, setMessage] = useState("");

  const formData = new FormData();
  formData.append("fullname", fullName);
  formData.append("tourID", tourId);
  formData.append("email", email);

  formData.append("phone", phone);
  formData.append("date", date);
  formData.append("tickets", tickets);
  formData.append("message", message);

  //form handling

  const handleForm = (e) => {
    console.log("Helllooooo");
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log(token, "token");

    axios({
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/create`,
      data: formData,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        toast.success(response.data.message);
        console.log(response);
        setTimeout(() => {
          navigate("/TourList");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.success(error.message);
      });
  };
  return (
    <div className={styles.container}>
      <ToastContainer />

      <div
        style={{
          backgroundImage:
            "url(https://html.geekcodelab.com/holiday-planners/assets/images/tour-banner.jpg)",
        }}
        className={styles.topContainer}
      >
        <h1 className={styles.topContainettitle}>Tour Detail</h1>
      </div>
      <div className=" flex -mt-4  ">
        <div className=" w-2/3">
          <div className="  p-4 flex ">
            <div className=" flex flex-row gap-3 justify-center p-1 text-1xl border-black border-1 bg-custom">
              <AiFillInfoCircle />
              Information
            </div>
            <button className="flex flex-row gap-3 justify-center p-6 text-3xl border-black border-2 hover:bg-custom">
              <GiOpenBook />
              Tour Plan
            </button>
            <button className="flex flex-row gap-3 justify-center p-6 text-3xl  border-black border-2  hover:bg-custom">
              <ImLocation />
              Location
            </button>
            <button className="flex flex-row gap-3 justify-center p-6 text-3xl  border-black border-2  hover:bg-custom">
              <GrGallery />
              Gallery
            </button>
            <button className="flex flex-row gap-3 justify-center p-6 text-3xl  border-black border-2  hover:bg-custom">
              <BsBookFill />
              Review
            </button>
          </div>
          <div className="flex flex-col">
            <p className=" flex flex-row text-6xl text-black italic ml-11 mt-14 mb-10">
              A wonderful serenity has <br /> taken possession of my entire
              <br /> soul
            </p>

            <div className=" flex gap-10 mt-10 bg-custom h-36 text-2xl">
              <div className="day">
                <AiOutlineClockCircle className=" flex text-5xl ml-9 mt-3 white gap-6 cursor-pointer" />{" "}
                <p className=" flex flex-row text-1xl mt-5 ml-7 cursor-pointer">
                  {" "}
                  2days
                </p>
              </div>

              <div className="people">
                <GrGroup className=" flex text-5xl ml-9 mt-4 bg-white gap-6 cursor-pointer" />
                <p className=" flex flex-row text-1xl mt-5 ml-7  cursor-pointer">
                  {" "}
                  6people
                </p>
              </div>

              <div className="peopleplus">
                <MdOutlineGroupAdd className=" flex text-5xl ml-9 mt-3 white gap-6 cursor-pointer" />{" "}
                <p className=" flex flex-row text-1xl mt-5 ml-7 cursor-pointer">
                  {" "}
                  18
                </p>
              </div>

              <div className="locationdetail">
                <ImLocation className=" flex text-5xl ml-9 mt-3 white gap-6 cursor-pointer" />{" "}
                <p className=" flex flex-row text-1xl mt-5 ml-7 cursor-pointer ">
                  {" "}
                  Greece
                </p>
              </div>

              <div className="discover">
                <FiSettings className=" flex text-5xl ml-9 mt-3 white gap-6 cursor-pointer" />{" "}
                <p className=" flex flex-row text-1xl mt-5 ml-7 cursor-pointer ">
                  {" "}
                  Location
                </p>
              </div>
            </div>

            <p className="flex flex-row text-2xl gap-3 ml-9 mt-9 mb-9 mr-7 ">
              I should be incapable of drawing a single stroke at the present
              moment; and yet I feel that I never was a greater artist than now.
              When, while the lovely valley teems with vapour around me, and the
              meridian sun strikes the upper surface of the impenetrable foliage
              of my trees, and but a few stray gleams. <br /> <br />I should be
              incapable of drawing a single stroke at the present moment; and
              yet I feel that I never was a greater artist than now. When, while
              the lovely valley teems with vapour around me, and the meridian
              sun strikes the upper surface of the impenetrable foliage of my
              trees, and but a few stray gleams steal into the inner sanctuary,
              I throw myself down among the tall grass by the trickling stream;
              and, as I lie close to the earth, a thousand unknown plants are
              noticed by me: when I hear the buzz of the little world among the
              stalks, and grow familiar with the countless indescribable forms
              of the insects and flies, then I feel the presence of the
              Almighty, who formed us in his own image, and the breath
            </p>
            <video
              className=" w-840 h-360 mt-6 mb-16"
              controls
              autoPlay
              loop
            >
              <source
                src="../public/highlight-video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="shadow-custom-vertical">
            <div class=" flex flex-col text-1xl ">
              <div class=" flex flex-row gap-100 shadow-custom leading-50">
                <div class=" font-bold">Destination</div>
                <div class=" ">Greece</div>
              </div>
              <div class=" flex flex-row gap-100 shadow-custom leading-50">
                <div class="font-bold">Departure</div>
                <div class=" ">Lorem Ipsum</div>
              </div>
              <div class=" flex flex-row gap-100 shadow-custom leading-50">
                <div class="font-bold">Departure Time</div>
                <div class="cell">9:15 AM To 9:30 AM.</div>
              </div>
              <div class="flex flex-row gap-100 shadow-custom leading-50">
                <div class="font-bold">Dress Code</div>
                <div class="cell">comfortable clothing and light jacket.</div>
              </div>
              <div class="flex flex-row gap-100 shadow-custom leading-50">
                <div class="font-bold">Price Included</div>
                <div class="cell">
                  5 Star Accommodation
                  <br /> Air fases <br />3 Nights Hotel Accomodation <br />
                  All transportation in destination <br />
                  location
                </div>
              </div>
              <div class="flex flex-row gap-100 shadow-custom leading-50">
                <div class="font-bold">Price not Included</div>
                <div class="cell">
                  Guide Service Fee
                  <br /> Any Private Expenses
                  <br /> Room Service Fees
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/3 mt-28 flex flex-col border stroke-lime-800 mr-3 ml-6 mb-40 gap-3">
          <div className="  flex text-2xl  ">
            <div className="mb-9 mt-10 gap-9">
              <h2 className=" text-center text-5xl font-bold mb-24">
                Book your tour
              </h2>
              <form
                action="/"
                method="get"
                id="form"
                class="text-center font-bold bg-white gap-6"
              >
                <div className="space-y-4">
                  <div className="mr-10 mb-4">
                    <input
                      type="text"
                      id="name1"
                      class="font-bold border p-8 text-center bg-white"
                      placeholder="Full Name"
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="email"
                      id="email"
                      class="font-bold border p-8 text-center bg-white"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Confirm email"
                      className="font-bold border p-8 text-center bg-white"
                      // onChange={(e) => setConfirmEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="text"
                      id="name1"
                      class="font-bold border p-2 text-center bg-white"
                      placeholder="Phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="date"
                      id="email"
                      class="font-bold border p-8 text-center bg-white"
                      placeholder="Date"
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="text"
                      className="font-bold border p-8 text-center bg-white"
                      placeholder="Number of tickets"
                      onChange={(e) => setTickets(parseInt(e.target.value))}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="font-bold border p-10 text-center bg-white"
                      placeholder="Message"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <div className="flex ml-32 mb-7 mt-16 text-3xl space-x-2">
                    <input
                      type="checkbox"
                      className="w-6 h-6"
                      name=""
                      id=""
                    />
                    <p>Check availability</p>
                  </div>

                  <button
                    onClick={(e) => handleForm(e)}
                    className=" flex bg-custom p-10 hover:bg-white ml-32 mb-7 mt-16 text-3xl space-x-2"
                  >
                    Book now
                  </button>
                </div>
              </form>
            </div>
          </div>
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
              <p className="flex flex-col mb-9 text-4xl">
                <BiEnvelope />
                holidayplanners@gmail.com
              </p>
              <p className="flex flex-col mb-9 text-4xl">
                <BsTelephoneFill />
                +123 456 7890
              </p>
            </div>
          </div>
          <p className=" flex text-4xl underline mt-12 hover:bg-custom">
            <Link to="/">Go back to home</Link>
          </p>
        </div>
      </div>

      <div className=" flex mr-9 mt-4 mr-24 text-1xl "></div>

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

export default TourDetail;
