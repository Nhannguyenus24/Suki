import React from 'react';
import '../assets/NavBar.css';
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuTicket } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
function Navbar(props) {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <a href="index.html" className="logo"><img src={props.authorImg} alt="Logo" /></a>
        </div>
        <div className="navbar-center">
          <div className="search-box">
            <IoSearchOutline />
            <input type="text" placeholder="Event" />
          </div>
        </div>
        <div className="navbar-right">
          <ul>
            <li><a href="#"><IoMdNotificationsOutline size={28}/><span>Notification</span></a></li>
            <li><a href="#"><LuTicket size={28}/><span>Ticket</span></a></li>
          </ul>
          <div className="profile_img">
            <img src={props.authorImg} alt="profile-img"  />
          </div>
        </div>
      </nav>
    );
  }

export default Navbar;