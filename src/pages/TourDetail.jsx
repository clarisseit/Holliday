import React from 'react'
import { AiFillInfoCircle } from "react-icons/ai";
import { GiOpenBook } from "react-icons/gi";
import { ImLocation } from "react-icons/im";
import { GrGallery } from "react-icons/gr";
import { BsBookFill } from "react-icons/bs";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { BiSolidArrowToTop } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
export default function TourDetail() {
  return (
    <div>
      <br /> <br /> <br />
      <img
        src="../public/houses.jpg"
        alt=""
        className="pii"
      />
      <div className="bcgrdimg">
        <p className="homefirstc">RUSSIA</p>
      </div>
      <div className="btninfor">
        <button className="btninfor11">
          <i className="ffffi">ffffff</i>
          <AiFillInfoCircle />
          Information
          <i className="ffffi">ffffff</i>{" "}
        </button>{" "}
        <button className="btninfor1">
          <i className="ffff">ffffff</i> <GiOpenBook />
          Tour Plan<i className="ffff">ffffff</i>
        </button>
        <button className="btninfor1">
          <i className="ffff">ffffff</i> <ImLocation />
          Location
          <i className="ffff">ffffff</i>
        </button>
        <button className="btninfor1">
          <i className="ffff">ffffff</i>
          <GrGallery />
          Gallery<i className="ffff">ffffff</i>
        </button>
        <button className="btninfor1">
          <i className="ffff">ffffff</i> <BsBookFill />
          Review<i className="ffff">ffffff</i>
        </button>
      </div>
      <div className="allptd">
        <p className="pa">
          A wonderful serenity has <br /> taken possession of my entire <br />{" "}
          soul
        </p>
        <img
          className="imgtrip1de"
          src="ondetail.JPG"
          alt="Image 1"
        />{" "}
        <br /> <br />
        <p className="allptourdetailsrespo">
          I should be incapable of drawing a single stroke at the present
          moment; and yet I feel that I never was a greater artist than now.
          When, while the lovely valley teems with vapour around me, and the
          meridian sun strikes the upper surface of the impenetrable foliage of
          my trees, and but a few stray gleams. <br /> <br />I should be
          incapable of drawing a single stroke at the present moment; and yet I
          feel that I never was a greater artist than now. When, while the
          lovely valley teems with vapour around me, and the meridian sun
          strikes the upper surface of the impenetrable foliage of my trees, and
          but a few stray gleams steal into the inner sanctuary, I throw myself
          down among the tall grass by the trickling stream; and, as I lie close
          to the earth, a thousand unknown plants are noticed by me: when I hear
          the buzz of the little world among the stalks, and grow familiar with
          the countless indescribable forms of the insects and flies, then I
          feel the presence of the Almighty, who formed us in his own image, and
          the breath
        </p>
        <video
          className="videoresp"
          width="840"
          height="360"
          controls
          autoPlay
          loop
        >
          <source
            src="highlight-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* <div class="container">
          <div class="cell">Destination, Column 1</div>
          <div class="cell">Departure, Column 2</div>
          <div class="cell">Depature Time, Column 1</div>
          <div class="cell">Return Time, Column 2</div>
          <div class="cell">Dress Code, Column 2</div>
          <div class="cell">Price Included, Column 2</div>
          <div class="cell">Price Not Included, Column 2</div>
        </div> */}
        <div class="container">
          <div class="row">
            <div class="cell">Destination</div>
            <div class="cell">Greece</div>
          </div>
          <div class="row">
            <div class="cell">Departure</div>
            <div class="cell">Lorem Ipsum</div>
          </div>
          <div class="row">
            <div class="cell">Departure Time</div>
            <div class="cell">9:15 AM To 9:30 AM.</div>
          </div>
          <div class="row">
            <div class="cell">Dress Code</div>
            <div class="cell">comfortable clothing and light jacket.</div>
          </div>
          <div class="row">
            <div class="cell">Price Included</div>
            <div class="cell">
              5 Star Accommodation
              <br /> Air fases <br />3 Nights Hotel Accomodation <br />
              All transportation in destination <br />
              location
            </div>
          </div>
          <div class="row">
            <div class="cell">Row 6, Column 1</div>
            <div class="cell">
              Guide Service Fee
              <br /> Any Private Expenses
              <br /> Room Service Fees
            </div>
          </div>
        </div>
        <div className="formd">
          <h1>BOOK THIS TOUR</h1> <br /> <br />
          <form
            action="book_tour.php"
            method="post"
          />{" "}
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> 
          {/* <label
            className="formsidedetails"
            for="fullName"
          >
            Full Name *
          </label> */}
          <input
            className="fullName"
            type="text"
            id="fullName"
            name="fullName"
            required
          />
          <br /> <br />
          <br />
          <label
            className="formsidedetails"
            for="email"
          >
            Email *
          </label>
          <input
            className="fullName"
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            required
          />
          <br /> <br /> <br />
          <label
            className="formsidedetails"
            for="confirmEmail"
          >
            Confirm Email *
          </label>
          <input
            className="fullName"
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            required
          />
          <br /> <br /> <br />
          <label
            className="formsidedetails"
            for="phone"
          >
            Phone *
          </label>
          <input
            className="fullName"
            type="tel"
            id="phone"
            name="phone"
            required
          />
          <br /> <br /> <br />
          <label
            className="formsidedetails"
            for="date"
          >
            Date
          </label>
          <input
            type="date"
            id="travelDate"
            name="travelDate"
            min="2023-10-01"
            max="2023-10-31"
          />
          <br /> <br /> <br />
          <label
            className="formsidedetails"
            for="numberOfTickets"
          >
            Number of Tickets
          </label>
          <input
            className="fullName"
            type="number"
            id="numberOfTickets"
            name="numberOfTickets"
            min="1"
          />
          <br /> <br /> <br />
          <label
            className="formsidedetails"
            for="message"
          >
            Message
          </label>
          <textarea
            className="fullName"
            id="message"
            name="message"
            rows="4"
          ></textarea>
          <br /> <br /> <br /> <br /> <br />
          <input
            className="fullName1"
            type="submit"
            value="BOOK NOW"
          />
        </div>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
        <br /> <br /> <br /> <br />
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <div className="footerd">
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
    </div>
  );
}
