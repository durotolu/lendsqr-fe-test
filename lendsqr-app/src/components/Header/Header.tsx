import React from "react";
import { Route, NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../icons/logo.svg";
import search_icon from "../../icons/search-icon.svg";
import notification from "../../icons/notification.svg";
import avatar from "../../icons/avatar.svg";
import dropdown from "../../icons/dropdown.svg";

function Header() {
  return (
    <header>
      <div className="search-nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="search">
          <input placeholder="Search for anything" />
          <div className="search-suffix">
            <img src={search_icon} alt="search icon" />
          </div>
        </div>
      </div>
      <div>
        <div className="profile-nav">
          <div>
            <a>Docs</a>
          </div>
          <div>
            <img src={notification} alt="notification bell" />
          </div>
          <div>
            <img src={avatar} alt="avatar" />
            <span className="profile-name">Adedeji</span>
            <img src={dropdown} alt="dropdown" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
