import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import NavBar from "./pages/Navbar/NavBar";
import Tour from "./pages/Tour";
import SingleTour from "./pages/SingleTour";
import Login from "./pages/Login";
import { tours } from "./utils/data";
import { createContext, useState } from "react";
import SignUp from "./pages/SignUp";
import Dash from "./pages/Dash/Dash";
import DashTour from "./pages/TourDash/DashTour";
import { ImLocation } from "react-icons/im";
import { FaGreaterThan } from "react-icons/fa";
import FormDash from "./pages/FormDash";
import Booking from "./pages/Booking/Booking";
import Dashboard from "./pages/Dashlayout/Dashboard";
import EditBooking from "./pages/Booking/EditBooking";


import EditTour from "./pages/EditTour";
import EditUser from "./pages/EditUser";
import Menu from "./pages/menu";
import DashMenu from "./pages/DashMenu";
import UserDash from "./pages/UserDash/UserDash";

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
            <Route path="/" element={<Layout />}>
              {
                <Route
                  index
                  element={
                    <>
                      <body className="row-no-scroll">
                        {/* <img src="../public/home.JPG"></img> */}
                        <section>
                          <>
                            <img src="/dubai.jpg" alt="" className="img-home" />
                          </>
                          <h1 className="centerHome">
                            <p className="lifeisshort">Life is short</p>
                            <p className="theworldiswide"> The World is Wide</p>
                            <p className="homefirst21000">
                              A journey of a 1000 miles starts with a single
                              step.Import the full demo content with 1 click and
                              create a head-turning website for your travel
                              agency.
                            </p>
                          </h1>
                        </section>
                        <br /> <br /> <br /> <br />
                        <br /> <br /> <br />
                        <div className="display-none">
                          <div className="  p-4 flex mt-3 ">
                            <p className="flex flex-row gap-2  p-2 text-1xl  border-black border-2  hover:bg-custom">
                              <ImLocation />
                              Location
                            </p>
                            <p className="flex flex-row gap-3 justify-center p-6 text-3xl  border-black border-2  hover:bg-custom">
                              <MdOutlineCalendarMonth />
                              Gallery
                            </p>
                            <p className="flex flex-row gap-3 justify-center p-6 text-3xl  border-black border-2  hover:bg-custom">
                              <FaFlag />
                              Review
                            </p>
                          </div>
                        </div>
                        <br />
                        <form className="aboutusall">
                          <img className="imghome" src="/home2.JPG"></img>
                          <div className="sidee">
                            <h5 className="about"> | About Us</h5>
                            <h3 className="plan">
                              <small>Plan Your</small> <b>Trip</b>
                              <small> with</small> <b>Us</b>
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
                              className="readmore"
                              onClick={() => {
                                navigate("/login");
                              }}
                            >
                              Read More
                            </button>
                          </div>
                        </form>
                        <div className="all-card">
                          <p className="header-card">
                            <small>| Amazing Destination</small>
                          </p>
                          <p className="header-card1">
                            Trending, <b>Best Selling Tours</b> And
                          </p>
                          <p className="header-card2"> Fun Destinations </p>
                          <div className="side11">
                            <div className="allCard">
                              <div className="card">
                                <img
                                  className="italy-pic"
                                  src="/plae.jpg"
                                ></img>
                                <p className="flex font-bold text-2xl mt-8 hover:bg-custom cursor-pointer w-20">
                                  ITALY
                                </p>

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
                                  className=" readmoree"
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
                                    className="readmoree"
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
                                    className=" readmoree"
                                    onClick={() => {
                                      navigate("/login");
                                    }}
                                  >
                                    Read More
                                  </button>
                                </div>
                              </div>
                            </div>
                            <br /> <br />
                            <br />
                          </div>
                        </div>
                        {/* // Testimonials */}
                        <div className="testmonial">
                          <p className="test2">
                            |Testimonials <br />
                            <b className="cu">C</b>ustomer{" "}
                            <b className="cu">R</b>
                            eviews
                          </p>

                          <img
                            className="imagetestmony"
                            src="/testmonyhome.JPG"
                          ></img>
                          <p className="testimonial-paragraph">
                            adipisicing elit. Perferendis sapiente tenetur
                            officiis explicabo fugit, sit mollitia eum atque
                            excepturi quaerat autem. adipisicing elit.
                            Perferendis sapiente tenetur officiis explicabo
                            fugit, sit mollitia eum atque excepturi quaerat
                            autem.adipisicing elit. Perferendis sapiente tenetur
                            officiis explicabo fugit, sit mollitia eum atque
                            excepturi quaerat autem.
                          </p>
                          <br />
                        </div>
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
                        <br />
                        {/* ?????//////////footer ///////////>>>>> */}
                        <div>
                          <nav className="footer">
                            <div className="respfooter">
                              <p className="footer2">
                                <b className="bold">
                                  <b className="b">H</b>olliday
                                  <b className="b">P</b>
                                  lanne
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
              <Route path="/tours" element={<Tour />} />
              <Route path="/tourList" element={<TourList />} />
              <Route path="/home" element={<home />} />
              <Route path="/tourDetails/:id" element={<TourDetail />} />

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
                      <img src="/image.jpg" alt="" className="img-contact" />
                      <p className="contactcss"> Contact Us</p>

                      <div className="contact-message">
                        <input
                          type="eml"
                          id="email2"
                          name="email"
                          placeholder="FullName"
                          required
                        />
                        <input
                          type="eml"
                          id="email2"
                          name="email"
                          placeholder="Email"
                          required
                        />

                        <input
                          type="eml"
                          id="email2"
                          name="email"
                          placeholder="Contact"
                          required
                        />
                        <textarea
                          type="eml"
                          id="email2"
                          name="email"
                          required
                          placeholder="Please Enter your Message"
                        />

                        <button
                          className="aa1"
                          onClick={() => {
                            navigate("/");
                          }}
                        >
                          Send Your Message
                        </button>
                      </div>

                      <div className=" ">
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
                        <div className="whybookwithus1">
                          <div className="whybookwithus">
                            WHY BOOK WITH US? <br />
                            <br />
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
                        {/* start footer-contacter */}
                        <nav className="footer">
                          <div className="respfooter">
                            <p className="footer2">
                              <b className="bold">
                                <b className="b">H</b>olliday
                                <b className="b">P</b>
                                lanne
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
                              <Link to="/AddTestimony">Sign Up Page</Link>{" "}
                              <br />
                            </ul>
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
                        <p className="linebottom">
                          ________________________________________________________________________________________________________________________________________________________________________________________________________________
                        </p>
                        <div className="down">
                          <p>
                            Copyright © 2023 <b className="c">clarisse.</b> All
                            Rights Reserved
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

                      {/* end footer-contact */}
                    </div>
                  </body>
                }
              ></Route>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            ;
            <Route path="/SignUp" element={<AddTestimony />} />
            <Route path="/Dash" element={<Dash />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/DashMenu" element={<DashMenu />} />
            <Route path="/DashTour" element={<DashTour />} />
            <Route path="/FormDash" element={<FormDash />} />
            <Route path="EditTour/:id" element={<EditTour />} />
            <Route path="/EditBooking/:id" element={<EditBooking />} />
            <Route path="/editUser" element={<EditUser />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="user" element={<UserDash />} />

              <Route path="booking" element={<Booking />} />

              <Route path="tour" element={<DashTour />} />

              <Route path="home" element={<Dash />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
