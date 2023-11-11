import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { MdOutlinePlace } from "react-icons/md";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { LuBookOpenCheck } from "react-icons/lu";
import { PiCompassTool } from "react-icons/pi";
import { CgCalendarDates } from "react-icons/cg";
import { FaRocketchat } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { FaUsers as UserIcon } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import ArrayTour from "../../components/ArrayTour";
import { Link, useNavigate } from "react-router-dom";
import { StartsCard } from "../../components/StartsCard";
import axios from "axios";
import { ThreeCircles } from "react-loader-spinner";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";



import { Bar } from "react-chartjs-2";
import { Radar } from "react-chartjs-2";
import styles from "./dash.module.css"
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
);


export default function Dashboard() {
  // Dynamic chart

  const [chart, setChart] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
  const fetchChart = () => {
     setIsLoading(true);
    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/count?year=2023",
      headers: {
        "Content-Type": "application.json",
      },
    })
      .then((response) => {
        setChart(response.data);
        console.log(response);
        setIsLoading(false);
      })

      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchChart();
  }, []);

  //Dynamic on booking

  const [booking, setBooking] = useState([]);
 
  const fetchBooking = () => {
    let token = localStorage.getItem("token");
    console.log(token);
   
    axios({
      method: "GET",

      url: "https://holiday-planner-4lnj.onrender.com/api/v1/booking/view",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setBooking(response.data);

      console.log(response.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchBooking();
  }, []);

  //Dynamic on booking End

  // Dynamic on tour start

  const [tours, setTours] = useState([]);

  const fetchTours = () => {
    let token = localStorage.getItem("token");
    console.log(token);

    axios({
      method: "GET",

      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setTours(response.data);

      console.log(response.data);
    });
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // Dynamic on tour end

  //End user Dynamic start
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    let token = localStorage.getItem("token");
    console.log(token);

    axios({
      method: "GET",

      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setUsers(response.data);

      console.log(response.data);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //End user Dynamic

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Tour Booking",
      },
    },
  };

  const labels = chart?.map((cart) => cart.label);
  const data = {
    labels,
    datasets: [
      {
        label: "Number of Bookings",
        data: chart?.map((cart) => cart.count),
        backgroundColor: "#c29d59",
      },
      {
        label: "Dataset 2",
        data: [],
        backgroundColor: "#c29d59",
      },
    ],
  };

  const Radardata = {
    labels: ["User1 ", "User2", "User3", "User4", "User5", "User6"],
    datasets: [
      {
        label: "Tours of Users",
        data: [200, 429, 365, 583, 212, 30],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      {isLoading ? (
        <ThreeCircles
          height="600"
          width="500"
          margin-right="auto"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=" bg-custom mr-24"
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      ) : (
        <div>
          <div className="dash1"></div>

          <h1 className="thisisdashboard"></h1>
          <h2 className=" flex text-center font-bold ml-100 text-4xl hover:text-orange-300">
            Hello Clarisse!!!!!!
          </h2>

          <Link to="/Dashboard">
            <p className="">Go back to home</p>
          </Link>

          <h2> </h2>
          <div className={styles.container}>
            <div className={styles.topcontainer}>
              <StartsCard
                title="Tours"
                text={tours.length}
              />
              <StartsCard
                title="Bookings"
                text={booking.length}
              />
              <StartsCard
                title="Users"
                text={users.length}
              />
            </div>
            <div className={styles.containbarchartdash}>
              <div className={styles.barchartdash}>
                <Bar
                  width={400}
                  height={400}
                  data={data}
                  options={options}
                />{" "}
                <br /> <br />
              </div>
              <div className="">
                <Radar
                  width={400}
                  height={700}
                  data={Radardata}
                  options={options}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
