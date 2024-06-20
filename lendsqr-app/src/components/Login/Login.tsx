import React from "react";
import { Route, NavLink } from "react-router-dom";
import "./Login.scss";
import wallpaper from "../pablo-sign-in 1.svg";
import logo from "../Group.svg";

function Login() {
  return (
    <div className="container">
      <div className="landing">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="wallpaper">
          <img src={wallpaper} alt="wallpaper" />
        </div>
      </div>
    </div>
  );
}

export default Login;
