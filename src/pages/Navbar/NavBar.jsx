import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoSearchCircleOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import styles from "./navbar.module.css";

import { Button } from "../../components/button";

function NavBar() {
  const [openModal, setOpen] = useState(false);

  const open = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarTop}>
        <div className={styles.left}>
          <div className={`${styles.contactItem} ${styles.borderRight}`}>
            <FiMail className={styles.navIcon} />
            <a className={styles.navIconLink}>holidayplanners@gmail.com</a>
          </div>
          <div className={styles.contactItem}>
            <FiPhoneCall className={styles.navIcon} />
            <a className={styles.navIconLink}>+1234567890</a>
          </div>
        </div>

        <div className={styles.right}>
          <a
            href="https://facebook.com"
            target="_blank"
            className={`${styles.socialIconContainer} ${styles.borderRight}`}
          >
            <FaFacebookF className={styles.socialIcon} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className={`${styles.socialIconContainer} ${styles.borderRight}`}
          >
            <FaInstagram className={styles.socialIcon} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            className={styles.socialIconkContainer}
          >
            <FaTwitter className={styles.socialIcon} />
          </a>
        </div>
      </div>

      <div className={styles.navbarBottom}>
        <a href="/">
          <img height={70} src="../public/hollidayplanner.JPG" />
        </a>
        <div className={styles.rightButtonsContainer}>
          <Button title={"RESERVE"} />
          <i className={styles.rightSearch}>
            <IoSearchCircleOutline />
          </i>
          <button className=" flex text-7xl " onClick={open}>
            <BiMenuAltRight />
          </button>
        </div>
      </div>

      {openModal && (
        <div className={styles.openmodal}>
          <div className={styles.link}>
            <Link to={"/"}>
              <p onClick={close}>Home</p>
            </Link>
            <Link to={"/contact"}>
              <p onClick={close}>Contact </p>
            </Link>
            <Link to={"/tourList"}>
              <p onClick={close}>Tour</p>
            </Link>

            <Link to={"/SignUp"}>
              <p onClick={close}>SignUp</p>
            </Link>
            <Link to={"/LoginPage"}>
              <p onClick={close}>Login</p>
            </Link>

            <button
              className={styles.closeModal}
            
              onClick={close}
            >
              <AiOutlineCloseCircle />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
