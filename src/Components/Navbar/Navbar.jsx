import React, { useEffect, useState } from "react";
import "./Navbar.css";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeLogo from "../../assets/images/yt_logo_rgb_dark.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/sidebarSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="nav">
      <div className="left">
        <div id="menuIcon">
          <MenuIcon onClick={() => dispatch(toggleMenu())} />
        </div>
        <Link to={"/"}>
          <img src={YouTubeLogo} alt="youtube-logo" id="logo"></img>
        </Link>
      </div>
      <div className="center">
        <div className="search">
          <input type="text" placeholder="Search" id="searchBar" />
          <span id="searchButton">
            <SearchIcon fontSize="small" />
          </span>
        </div>
        <div className="voiceInput">
          <span>
            <MicIcon />
          </span>
        </div>
      </div>
      <div className="right">
        <div id="uploadIcon">
          <VideocamOutlinedIcon fontSize="medium" />
        </div>
        <div id="notificationBell">
          <NotificationsOutlinedIcon fontSize="medium" />
        </div>
        <div id="profileIcon">
          <span>RK</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
