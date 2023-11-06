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

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Augst",
    "October",
    "Noveber",
    "December",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Number of Bookings",
        data: [38, 34, 87, 45, 34, 21, 32, 13, 64, 24, 35],
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
      {/* <ArrayTour/> */}
      <div>
        <div className="dash1"></div>
        <h1 className="thisisdashboard"></h1>
        <h2 className=" flex text-center font-bold ml-100 text-4xl hover:text-orange-300">
          Hello Clarisse!!!!!!
        </h2>
        
        {/* <Link to="/Dashboard">
          <p className="">Go back to home</p>
        </Link> */}

        <h2> </h2>
        <div className={styles.container}>
          <div className={styles.topcontainer}>
            <StartsCard
              title="Tours"
              text="200"
            />
            <StartsCard
              title="Bookings"
              text="500"
            />
            <StartsCard
              title="Users"
              text="300"
            />
          </div>
          <div className=" flex flex-row gap-x-16 w-1/2 h-96">
            <div className=" barchartdash">
              <Bar
                data={data}
                options={options}
              />
            </div>
            <div className=" flex w-96 h-full ">
              <Radar
                width={400}
                height={700}
                data={Radardata}
                options={options}
              />
            </div>
          </div>
        </div>
        <Link to="/">
          <p className="backhome">Go back to home</p>
        </Link>
      </div>
    </div>
  );
}
