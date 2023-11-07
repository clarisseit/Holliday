import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import NavBar from "./pages/Navbar/NavBar";
import Tour from "./pages/Tour";
import SingleTour from "./pages/SingleTour";
import Login from "./pages/Login";
import { tours } from "./utils/data";
import { createContext, useState } from "react";
import SignUp from "./pages/SignUp";
import Dash from "./pages/Dash/Dash";
import DashTour from "./pages/DashTour";
import { ImLocation } from "react-icons/im";
import { FaGreaterThan } from "react-icons/fa";
import FormDash from "./pages/FormDash";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashlayout/Dashboard";
import EditBooking from "./pages/EditBooking";

import EditTour from "./pages/EditTour";
import EditUser from "./pages/EditUser";
import Menu from "./pages/menu";
import DashMenu from "./pages/DashMenu";
import UserDash from "./pages/UserDash";

import "./App.css";
import TourList from "./pages/Tour/TourList";
import TourDetail from "./pages/TourDatail/TourDetail";
import AddTestimony from "./pages/AddTestimony";
import LoginPage from "./pages/LoginPage";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { BiSolidArrowToTop } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFlag } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export const AppContext = createContext();

function App() {
  const loggedUser = {
    name: "THIS LOGIN PAGE",
  };

  const signUser = {
    name: "THIS IS SIGNUP PAGE",
  };

  const [toursData] = useState(tours);

  let users = [];
  let blogs = [];
  let user = [];
  let blog = [];

  return (
    <>
      <AppContext.Provider value={{ toursData, loggedUser, users, blogs }}>
        <AppContext.Provider
          value={{ toursData, signUser, user, blog }}
        ></AppContext.Provider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Layout />}
            >
              {
                <Route
                  index
                  element={
                    <>
                      <body className="row-no-scroll">
                        {/* <img src="../public/home.JPG"></img> */}
                        <section>
                          <>
                            <img
                              src="/dubai.jpg"
                              alt=""
                              className="img-home"
                            />
                          </>
                          <div className="bcgrdimg">
                            {/* <img src="../public/homee1.JPG"></img> */}

                            <p className="lifeisshort">Life is short</p>
                            <p className="theworldiswide"> The World is Wide</p>
                            <p className="homefirst21000">
                              A journey of a 1000 miles starts with a single
                              step.Import the full <br />
                              demo content with 1 click and create a
                              head-turning website for <br /> your travel
                              agency.
                            </p>
                          </div>
                        </section>
                        <br /> <br /> <br /> <br />
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                        <br />
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                        {/* <div className="  p-4 flex ">
                          <button className="flex flex-row gap-3 justify-center p-6 text-3xl  border-black border-2  hover:bg-custom">
                            <ImLocation />
                            Location
                          </button>
                          <button className="flex flex-row gap-3 justify-center p-6 text-3xl  border-black border-2  hover:bg-custom">
                            <MdOutlineCalendarMonth />
                            Gallery
                          </button>
                          <button className="flex flex-row gap-3 justify-center p-6 text-3xl  border-black border-2  hover:bg-custom">
                            <FaFlag />
                            Review
                          </button>
                        </div> */}
                        {/* <div className=""> */}
                        {/* <input
                            className="flex flex-row gap-3 justify-center p-6 text-3xl  border-black border-2  hover:bg-custom"
                            type="text"
                            id="destination"
                            name="destination"
                            placeholder="Where To "
                            required
                          />

                          <input
                            className="flex flex-row gap-3 justify-center p-6 text-3xl  border-black border-2  hover:bg-custom"
                            type="date"
                            id="travelDate"
                            placeholder=" Choose Date"
                            name="travelDate"
                            min="2023-10-01"
                            max="2023-10-31"
                          />

                          <select
                            className="flex flex-col ml-96 gap-3 justify-center p-6 text-3xl  border-black border-2  hover:bg-custom"
                            id="travelType"
                            name="travelType"
                            placeholder="Travel Type"
                          >
                            <option value="vacation">Vacation</option>
                            <option value="business">Business</option>
                            <option value="adventure">Adventure</option>
                            <option value="family">Family</option>
                          </select>
                          <button className="box-btn">Find Now</button> */}
                        {/* </div> */}
                        <form className="home-about">
                          <img
                            className="imghome"
                            src="/home2.JPG"
                          ></img>
                          <div className="sidee">
                            <h5 className="about"> | About us</h5>
                            <h3 className="plan">
                              <small>Plan Your</small> <b>Trip</b>{" "}
                              <small>with</small> <b>Us</b>
                            </h3>
                            <br />
                            <p className=" flex flex-col">
                              Far far away, behind the word mountains, far from
                              the countries Vokalia and Consonantia, there live
                              the blind texts. Separated they live in
                              Bookmarksgrove right at the coast of the
                              Semantics, a large language ocean. A small river
                              named Duden flows by their place and supplies it
                              with the necessary regelialia. It is a
                              paradisematic country, in which roasted parts of
                              sentences fly into your mouth. Even the
                              all-powerful Pointing has no control about the
                              blind texts it is an almost unorthographic. Italic
                              Mountains, she had a last view back on the skyline
                            </p>

                            <button
                              className="click11"
                              onClick={() => {
                                navigate("/login");
                              }}
                            >
                              Read More
                            </button>
                          </div>
                        </form>
                        <div className="">
                          <p className="p1">
                            <small>| Amazing Destination</small>
                          </p>
                          <p className="p2">
                            {" "}
                            Trending, <b>Best Selling Tours</b> And
                          </p>
                          <p className="p3"> Fun Destinations </p>
                          <nav className="nav2">
                            <div className="side11">
                              <div className="card">
                                <img
                                  className="italy-pic"
                                  src="/plae.jpg"
                                ></img>
                                <p className="flex font-bold text-2xl mt-8 hover:bg-custom cursor-pointer w-20">
                                  ITALY
                                </p>
                                <br />
                                <p className="onp">
                                  Holiday Planners sit <br /> amet consectetur
                                  adipisicing elit
                                </p>
                                <p className="delete1">
                                  <del className="red1">400$</del>
                                  <br />
                                  300$
                                </p>
                                <button
                                  className=" flex font-bold text-2xl bg-custom hover:bg-black text-cyan-50 w-32 rounded-tl rounded-tr"
                                  onClick={() => {
                                    navigate("/login");
                                  }}
                                >
                                  Read More
                                </button>
                              </div>
                              <div className="card">
                                <div className="cardsmall">
                                  <img
                                    className="italy-pic"
                                    src="/mountain.jpg"
                                  ></img>
                                  <p className="flex font-bold text-2xl mt-8 hover:bg-custom cursor-pointer w-20">
                                    RUSSIA
                                  </p>
                                  <br />
                                  <p className="onp">
                                    Holiday Planners sit amet consectetur
                                    adipisicing elit
                                  </p>

                                  <p className="delete1">
                                    <del className="red1">400$</del>
                                    <br />
                                    300$
                                  </p>
                                  <button
                                    className=" flex font-bold text-2xl bg-custom hover:bg-black text-cyan-50 w-32 rounded-tl rounded-tr"
                                    onClick={() => {
                                      navigate("/login");
                                    }}
                                  >
                                    Read More
                                  </button>
                                </div>
                              </div>
                              <div className="crad3small">
                                <div className="card">
                                  <img
                                    className="italy-pic"
                                    src="/image.jpg"
                                  ></img>

                                  <p className="flex font-bold text-2xl mt-8 hover:bg-custom cursor-pointer w-20">
                                    GREECE
                                  </p>
                                  <br />
                                  <p className="onp">
                                    Holiday Planners sit <br /> amet consectetur
                                    adipisicing elit
                                  </p>
                                  <br />
                                  <p className="delete1">
                                    <del className="red1">400$</del>
                                    <br />
                                    300$
                                  </p>

                                  <button
                                    className=" flex font-bold text-2xl bg-custom hover:bg-black text-cyan-50 w-32 rounded-tl rounded-tr"
                                    onClick={() => {
                                      navigate("/login");
                                    }}
                                  >
                                    Read More
                                  </button>
                                </div>
                              </div>
                              <br /> <br />
                              <br />
                            </div>
                          </nav>
                          <br /> <br />
                          <br />
                        </div>
                        <div className="testmony">
                          <p className="test2">
                            <b className="lineff">|</b>Testimonials <br />
                            <b className="cu">C</b>ustomer{" "}
                            <b className="cu">R</b>
                            eviews
                          </p>
                          <br />
                          <div className="abc">
                            <img
                              className="imagetestmony"
                              src="/testmonyhome.JPG"
                            ></img>
                            <div className="testmony-p">
                              adipisicing elit. Perferendis sapiente tenetur
                              officiis explicabo fugit, sit mollitia eum atque
                              excepturi quaerat autem. adipisicing elit.
                              Perferendis sapiente tenetur officiis explicabo
                              fugit, sit mollitia eum atque excepturi quaerat
                              autem.adipisicing elit. Perferendis sapiente
                              tenetur officiis explicabo fugit, sit mollitia eum
                              atque excepturi quaerat autem.
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
                                    adipisicing elit. Perferendis sapiente{" "}
                                    <br />
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
                              <p className=" flex text-4xl mt-9">Navigation</p>
                              <p>_______________________________</p>
                              <br />
                              <ul className="listf">
                                {/* <li>Home</li> */}
                                <Link to="/">Home Page</Link> <br></br>
                                <Link to="/TourList">TourList Page</Link> <br />
                                <Link to="/TourDetails">
                                  TourDetails Page
                                </Link>{" "}
                                <br />
                                <Link to="/LoginPage">Login Page</Link> <br />
                                <Link to="/AddTestimony">
                                  Sign Up Page
                                </Link>{" "}
                                <br />
                                <Link to="/Dash">Dashboard</Link> <br />
                              </ul>
                            </div>

                            <div className="helpff">
                              <p className="help2">Need Help ?</p>
                              <p>________________________________</p>
                              <p className="footer12">
                                <b className="linef">|</b> Call Us <br /> +123
                                456 7890
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
                              Copyright © 2023 <b className="c">clarisse.</b>{" "}
                              All Rights Reserved
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
                      </body>
                    </>
                  }
                />
              }
              <Route
                path="/tours"
                element={<Tour />}
              />
              <Route
                path="/tourList"
                element={<TourList />}
              />
              <Route
                path="/tourDetails/:id"
                element={<TourDetail />}
              />

              {/* <Route
                path="/DashTour"
                element={<DashTour />}
              /> */}

              {/* <Route
                path="EditTour/:id"
                element={<EditTour />}
              /> */}

              <Route
                path="/Contact"
                element={
                  <body>
                    <div className="massege">
                      <img
                        src="/image.jpg"
                        alt=""
                        className="img-contact"
                      />
                      <p className="contactcss"> Contact Us</p>

                      <div className=" flex flex-col mt-8">
                        <div className="contactformsmall">
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
                                  className="font-bold border p-16 text-center bg-white"
                                  placeholder="Message"
                                  onChange={(e) => setMessage(e.target.value)}
                                />
                              </div>

                              <button
                                onClick={(e) => handleForm(e)}
                                className=" flex bg-custom p-5 hover:bg-white ml-3 mb-7 mt-16 text-3xl space-x-2"
                              >
                                Send Message
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="getaquestion">
                          <p>GET A QUESTION?</p>

                          <br />
                          <p className="">
                            Do not hesitage to give us a call. We are <br /> an
                            expert team and we are happy to talk <br /> to you.
                          </p>
                          <p>
                            <b className="linef1">
                              <BiEnvelope />
                            </b>{" "}
                            holidayplanners@gmail.com
                          </p>
                          <p>
                            <b className="linef1">
                              {" "}
                              <BsTelephoneFill />
                            </b>{" "}
                            +123 456 7890
                          </p>
                        </div>
                        <div className="whybookwithus">
                          <h2 className=" font-bold text-center mt-11 text-2xl"></h2>{" "}
                          <div className=" flex flex-col text-2xl mt-8 ml-12 mb-16">
                            WHY BOOK WITH US?
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
                        <p className="linkcontactresp">
                          <Link to="/">Go back to home</Link>
                        </p>
                        <br /> <br /> <br /> <br /> <br />
                        <div className="footercontact"></div>
                        <nav className="footer">
                          <div className="footerrensp">
                            <p className="footer2">
                              <b className="bold">
                                <b className="b">H</b>olliday{" "}
                                <b className="b">P</b>
                                lanner
                              </b>
                              <br /> <br />
                              <b className="i">
                                Holiday Planners sit amet consectetur
                                <br />
                                adipisicing elit. Perferendis sapiente <br />
                                tenetur officiis explicabo fugit, sit <br />
                                mollitia eum atque excepturi quaerat autem.
                              </b>{" "}
                              <br /> <br />
                              <div className="contactresp">
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
                          <div className="">
                            <div className="navigation">
                              <p className="nav">Navigation</p>
                              <p>_______________________________</p>
                              <br />
                              <ul className="listf">
                                {/* <li>Home</li> */}
                                <Link to="/">Home Page</Link> <br></br>
                                <Link to="/TourList">TourList Page</Link> <br />
                                <Link to="/TourDetails">
                                  TourDetails Page
                                </Link>{" "}
                                <br />
                                <Link to="/LoginPage">Login Page</Link> <br />
                                <Link to="/AddTestimony">
                                  Sign Up Page
                                </Link>{" "}
                                <br />
                                <Link to="/Dash">Dashboard</Link> <br />
                              </ul>
                            </div>
                          </div>
                          <div className="helpff">
                            <p className="help2">Need Help ?</p>
                            <p>________________________________</p>
                            <p className="footer12">
                              <b className="linef">|</b> Call Us <br /> +123 456
                              7890
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
                      </div>
                    </div>
                  </body>
                }
              ></Route>
            </Route>
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/LoginPage"
              element={<LoginPage />}
            />
            ;
            <Route
              path="/SignUp"
              element={<AddTestimony />}
            />
            <Route
              path="/Dash"
              element={<Dash />}
            />
            <Route
              path="/Menu"
              element={<Menu />}
            />
            <Route
              path="/DashMenu"
              element={<DashMenu />}
            />
            <Route
              path="/DashTour"
              element={<DashTour />}
            />
            <Route
              path="/FormDash"
              element={<FormDash />}
            />
            <Route
              path="EditTour/:id"
              element={<EditTour />}
            />
            <Route
              path="/EditBooking/:id"
              element={<EditBooking />}
            />
            <Route
              path="/EditUser"
              element={<EditUser />}
            />
            <Route
              path="/Dashboard"
              element={<Dashboard />}
            >
              <Route
                path="User"
                element={<UserDash />}
              />

              <Route
                path="Booking"
                element={<Booking />}
              />

              <Route
                path="Tour"
                element={<DashTour />}
              />

              <Route
                path="Dashboard"
                element={<Dash />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
