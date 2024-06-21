import React from "react";
import { Route, NavLink } from "react-router-dom";
import "./Login.scss";
import wallpaper from "../../icons/wallpaper.svg";
import logo from "../../icons/logo.svg";

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
      <div className="form">
        <div>
          <h1>Welcome!</h1>
          {/* <span>Enter details to login.</span> */}
          <input placeholder="Email" />
          <input placeholder="Password" />
          <div className="forgot">Forgot PASSWORD?</div>
          <button>LOG IN</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
