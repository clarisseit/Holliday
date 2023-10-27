import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Tour from "./pages/Tour";
import SingleTour from "./pages/SingleTour";
import Login from "./pages/Login";
import { tours } from "./utils/data";
import { createContext, useState } from "react";
import SignUp from "./pages/SignUp";
import Dash from "./pages/Dash";
import DashTour from "./pages/DashTour";
import FormDash from "./pages/FormDash";
import "./App.css";
import TourList from "./pages/TourList";
import TourDetail from "./pages/TourDetail";
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
                      {/* <img src="../public/home.JPG"></img> */}
                      <section>
                        <>
                          <img
                            src="../public/dubai.jpg"
                            alt=""
                            className="pi"
                          />
                        </>
                        <div className="bcgrdimg">
                          {/* <img src="../public/homee1.JPG"></img> */}

                          <p className="homefirst">Life is short</p>
                          <p className="homefirst1"></p>
                          <p className="homefirst2">
                            A journey of a 1000 miles starts with a single
                            step.Import the full <br />
                            demo content with 1 click and create a head-turning
                            website for <br /> your travel agency.
                          </p>
                        </div>
                      </section>
                      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                      <br /> <br /> <br /> <br />
                      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                      <div className="choose">
                        <form className="form">
                          <label for="destination">Where To?</label>
                          <input
                            type="text"
                            id="destination"
                            name="destination"
                            required
                          />
                          <br></br>
                          <label for="travelDate">Choose Date</label>
                          <input
                            type="date"
                            id="travelDate"
                            name="travelDate"
                            min="2023-10-01"
                            max="2023-10-31"
                          />
                          <br></br>

                          <label for="travelType">Travel Type</label>
                          <select
                            id="travelType"
                            name="travelType"
                          >
                            <option value="vacation">Vacation</option>
                            <option value="business">Business</option>
                            <option value="adventure">Adventure</option>
                            <option value="family">Family</option>
                          </select>
                          <br></br>

                          <button
                            className="click1"
                            onClick={() => {
                              navigate("/login");
                            }}
                          >
                            Find Now
                          </button>
                        </form>
                      </div>
                      <br /> <br /> <br /> <br />
                      <div></div>
                      <form className="side">
                        <img src="../public/home2.JPG"></img>
                        <div className="sidee">
                          <h5 className="about"> | About us</h5>
                          <h3 className="plan">
                            <small>Plan Your</small> <b>Trip</b>{" "}
                            <small>with</small> <b>Us</b>
                          </h3>
                          <p className="p">
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics,
                            a large language ocean. A small river named Duden
                            flows by their place and supplies it with the
                            necessary regelialia. It is a paradisematic country,
                            in which roasted parts of sentences fly into your
                            mouth. Even the all-powerful Pointing has no control
                            about the blind texts it is an almost
                            unorthographic. Italic Mountains, she had a last
                            view back on the skyline
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
                      <div>
                        <p className="p1">
                          <small>| Amazing Destination</small>
                        </p>
                        <p className="p2">
                          {" "}
                          Trending, <b>Best Selling Tours</b> And
                        </p>
                        <p className="p3"> Fun Destinations </p>
                      </div>
                      <nav className="nav2">
                        <div className="side11">
                          <div className="card">
                            <img
                              className="italy-pic"
                              src="../public/plae.jpg"
                            ></img>
                            <button className="btn-i">ITALY</button>
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
                              className="booknow"
                              // className="book-now"
                              // onClick={() => {
                              //   navigate("/login");
                              // }}
                            >
                              BOOK NOW
                            </button>
                          </div>
                          <div className="card">
                            <div>
                              <img
                                className="italy-pic"
                                src="../public/mountain.jpg"
                              ></img>
                              <button className="btn-i">RUSSIA</button>
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
                                className="booknow"
                                // className="book-now"
                                // onClick={() => {
                                //   navigate("/login");
                                // }}
                              >
                                BOOK NOW
                              </button>
                            </div>
                          </div>
                          <div className="card">
                            <img
                              className="italy-pic"
                              src="../public/image.jpg"
                            ></img>

                            <button className="btn-i">GREECE</button>
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
                              className="booknow"
                              // className="book-now"
                              // onClick={() => {
                              //   navigate("/login");
                              // }}
                            >
                              BOOK NOW
                            </button>
                          </div>
                          <br /> <br />
                          <br />
                        </div>
                      </nav>
                      <br /> <br />
                      <br />
                      <div className="testmony">
                        <p className="testmony1">
                          {" "}
                          <b className="lineff">|</b>Testimonials
                        </p>
                        <p className="test2">
                          <b className="cu">C</b>ustomer <b className="cu">R</b>
                          eviews
                        </p>
                        <br />
                        <div className="abc">
                          {/* <img
                            className="imagetestmony"
                            src="../public/tesmony.JPG"
                          ></img> */}
                        </div>
                      </div>
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
                            <Link to="/TourDetails">TourDetails Page</Link>{" "}
                            <br />
                            <Link to="/LoginPage">Login Page</Link> <br />
                            <Link to="/AddTestimony">Sign Up Page</Link> <br />
                            <Link to="/Dash">Dashboard</Link> <br />
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
                      <p>
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
                path="/tourDetails"
                element={<TourDetail />}
              />
              <Route
                path="/AddTestimony"
                element={<AddTestimony />}
              />
              <Route
                path="/LoginPage"
                element={<LoginPage />}
              />
              <Route
                path="/Dash"
                element={<Dash />}
              />
              <Route
                path="/DashTour"
                element={<DashTour />}
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
                path="*"
                element={
                  <div className="massege">
                    <br /> <br /> <br /> <br />
                    <img
                      src="../public/image.jpg"
                      alt=""
                      className="pii"
                    />
                    <div className="bcgrdimg">
                      <p className="homefirstc">Contact US</p>
                    </div>
                    <form
                      className="Masseges"
                      action="masseges"
                      method="post"
                    >
                      <div className="contactdiv">
                        <label
                          className="divn"
                          for="name"
                        >
                          Names:
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                        />
                        <br></br>

                        <label
                          className="divn"
                          for="email"
                        >
                          Email:
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                        />
                        <br />

                        <label
                          className="divnn"
                          for="myTextArea"
                        >
                          Write your message:
                        </label>
                        <textarea
                          className="divn"
                          id="myTextArea"
                          name="myTextArea"
                          rows="4"
                          cols="50"
                        ></textarea>
                        <br />

                        <button
                          className="msg"
                          onClick={() => {
                            navigate("/login");
                          }}
                        >
                          Send Your Message
                        </button>
                      </div>
                      <div className="formt1co">
                        <h2>
                          <b className="linef">|</b>WHY BOOK WITH US?
                        </h2>{" "}
                        <br />
                        <p>
                          <b className="bold">. </b>Best Price Guarantee
                        </p>
                        <p>
                          <b className="bold">. </b>Customer care available 24/7
                        </p>
                        <p>
                          <b className="bold">. </b>Free Travel Insureance
                        </p>
                        <p>
                          <b className="bold">. </b>Hand-picked Tours &
                          Activities
                        </p>
                      </div>
                      <div></div>
                      <div className="formt1cont">
                        <h2>
                          <b className="linef1co">|</b>GET A QUESTION?
                        </h2>{" "}
                        <br />
                        <p className="white">
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
                    </form>
                    <p className="linkcontactresp">
                      <Link to="/">Go back to home</Link>
                    </p>
                    
                    <div className="footercontact">
                      {/* <img
                        className="tourlistimg"
                        src="../public/footertour.JPG"
                      ></img> */}

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
                              <Link to="/AddTestimony">Sign Up Page</Link>{" "}
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
                }
              ></Route>
              <Route
                path="/login"
                element={<Login />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
