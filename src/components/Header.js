import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../images/youtube.png";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallICon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
          <img src={Logo} alt="" className="header_logo" />
        </Link>
      </div>

      <div className="header_input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header_inputButton" />
        </Link>
      </div>

      <div className="header_icons">
        <VideoCallICon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationIcon className="header_icon" />
        <Avatar src="https://avatars2.githubusercontent.com/u/24712956?S=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4" />
      </div>
    </div>
  );
}
export default Header;
