import React from "react";
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
import { Link, useNavigate } from "react-router-dom";




const TourList = () => {
  return (
    <div>
     

      <img
        className="tourlistimg"
        src="../public/Tourlist.JPG"
      ></img>
      <div className="tourform">
        <div className="choosetr">
          <form className="formtr">
            <label
              className="destinationtr"
              for="destination"
            >
              Sort by:
            </label>
            <select className="releasedateresp"
              id="travelType"
              name="travelType"
            >
              <option value="vacation">Release Date</option>
              <option value="business">Tour Date</option>
              <option value="adventure">Title</option>
              <option value="family">Price</option>
              <option value="business">Popularity</option>
              <option value="adventure">Rating</option>
              <option value="family">Duration</option>
            </select>
            <select
              id="travelType"
              name="travelType"
            >
              <option value="vacation">Descending</option>
              <option value="business">Ascending</option>
            </select>
          </form>
          <br></br>
        </div>

        <div className="tripimg">
          <div className="btntour1">
            <img
              className="imgtrip1"
              src="plae.jpg"
              alt="Image 1"
            />
            <div className="tour110">
              <div>
                <button className="btnt">Italy</button>
                <br />
                <p className="onlineresp">Online Tour Booking Platform</p>
                <br />
                <p>
                  <AiOutlineClockCircle />
                  Group Size <i className="ffff">fffff</i>
                  <MdGroupRemove />
                  15+ People
                </p>
                <br />

                <p className="ptour">
                  $2,000 <i className="ffff">ffffffffffffffff</i>
                  <button className="btnt">
                    <Link to="/tourDetails">Book now</Link>
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="btntour1">
            <img
              className="imgtrip1"
              src="houses.jpg"
              alt="Image 1"
            />
            <div className="tour110">
              <div>
                <button className="btnt">Italy</button>
                <br />
                <p>Online Tour Booking Platform</p>
                <br />
                <p>
                  <AiOutlineClockCircle />
                  Group Size <i className="ffff">ffffff</i>
                  <MdGroupRemove />
                  15+ People
                </p>
                <br />

                <p className="ptour">
                  $2,000 <i className="ffff">ffffffffffffffff</i>
                  <button className="btnt">
                    <Link to="/tourDetails">Book now</Link>
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="triping2">
            <div className="btntour2">
              <img
                className="imgtrip2"
                src="image.jpg"
                alt="Image 1"
              />
              <div className="tour1100">
                <div>
                  <button className="btnt">Italy</button>
                  <br />
                  <p>Online Tour Booking Platform</p>
                  <br />
                  <p>
                    <AiOutlineClockCircle />
                    Group Size <i className="ffff">ffffff</i>
                    <MdGroupRemove />
                    15+ People
                  </p>
                  <br />

                  <p className="ptour">
                    $5,000 <i className="ffff">ffffffff</i>
                    <button className="btnt">
                      {" "}
                      <Link to="/tourDetails">Book now</Link>
                    </button>
                  </p>
                </div>
              </div>
            </div>

            <div className="btntour3">
              <img
                className="imgtrip3"
                src="dubai.jpg"
                alt="Image 1"
              />
              <div className="tour11000">
                <div>
                  <button className="btnt">Italy</button>
                  <br />
                  <p>Online Tour Booking Platform</p>
                  <br />
                  <p>
                    <AiOutlineClockCircle />
                    Group Size <i className="ffff">ffffff</i>
                    <MdGroupRemove />
                    15+ People
                  </p>
                  <br />

                  <p className="ptour">
                    $7,000 <i className="ffff">fffffffffffffff</i>
                    <button className="btnt">
                      {" "}
                      <Link to="/tourDetails">Book now</Link>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="formtourupdate">
        <h1>
          <b className="linef">|</b>FIND YOUR TOUR
        </h1>{" "}
        <br /> <br />
        <form
          action="search_results.php"
          method="get"
        />
        <div className="search">
          <label
            className="noborder"
            for="search1"
          >
            <BiSolidMap />
          </label>
          <input
            className="noborder"
            type="text"
            id="search22"
            name="q"
            placeholder="Search..."
          ></input>
        </div>
        <br />
        <div className="search">
          <label for="month">
            <CgCalendarDates />
          </label>
          <select
            className="noborder"
            id="month1"
            name="month"
          >
            <option
              className="anyday"
              value="Any"
            >
              <CgCalendarDates />
              Month
            </option>
            <option value="January">January</option>
            <option value="January">February</option>
            <option value="January">Mach</option>
            <option value="January">April</option>
            <option value="January">May</option>
            <option value="January">June</option>
            <option value="January">July</option>
            <option value="January">August</option>
            <option value="January">September</option>
            <option value="January">November</option>
            <option value="January">December</option>
          </select>
        </div>
        <label for="month"></label>
        <select
          className="daytour"
          id="month1"
          name="month"
        >
          <option value="Any">Any</option>
          <option value="January">Any</option>
          <option value="January">1 Day Tour</option>
          <option value="January">2-4 Day Tour</option>
          <option value="January">5-7 Day Tour</option>
          <option value="January">7+ Day Tour</option>
        </select>
        <br />
        <br />
        <label
          className="daytour"
          for="minPrice"
        >
          Min Price
        </label>
        <input
          type="number"
          id="minPrice"
          name="minPrice"
        />
        <br />
        <label
          className="daytour"
          for="maxPrice"
        >
          Max Price
        </label>
        <input
          type="number"
          id="maxPrice"
          name="maxPrice"
        />
        <br />

        <div className="activities">
        <label className="daytour">Activities:</label>
        <br />
        <input
          className="daytour"
          type="checkbox"
          id="cultural"
          name="activity"
          value="Cultural"
        />
        <label for="cultural">Cultural</label>
        <br />
        <input
          className="daytour"
          type="checkbox"
          id="adventure"
          name="activity"
          value="Adventure"
        />
        <label for="adventure">Adventure</label>
        <br />
        <input
          type="checkbox"
          id="historical"
          name="activity"
          value="Historical"
        />
        <label for="historical">Historical</label>
        <br />
        <input
          type="checkbox"
          id="seaside"
          name="activity"
          value="Seaside"
        />
        <label for="seaside">Seaside</label>
        <br />
        <input
          type="checkbox"
          id="discovery"
          name="activity"
          value="Discovery"
        />
        <label for="discovery">Discovery</label>
        <br />
        </div>
        {/* <input className="submitfindnow"
          type="submittyyy"
          value="FIND NOW"
        /> */}
      </div>

      <div className="formt1">
        <h2>
          <b className="linefupdate">|</b>WHY BOOK WITH US?
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
          <b className="bold">. </b>Hand-picked Tours & Activities
        </p>
      </div>
      <div className="tourlistform">
        <div className="formt2update">
          <h2 >
            <b className="linef1">|</b>GET A QUESTION?
          </h2>{" "}
          <br />
          <p>
            Do not hesitage to give us a call. We are <br /> an expert team and
            we are happy to talk <br /> to you.
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
      </div>
      {/* <div className="footercontact">
        <img
          className="tourlistimg"
          src="../public/footertour.JPG"
        ></img>
      </div> */}

      <div className="footerlist">
        <nav className="footer">
          <p className="footer2">
            <b className="bold">
              <b className="b">H</b>olliday <b className="b">P</b>
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

          <div className="navigation">
            <p className="nav">Navigation</p>
            <p>_______________________________</p>
            <br />
            <ul className="listf">
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
      </div>
    </div>
  );
};

export default TourList;
