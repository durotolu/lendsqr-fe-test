// import React from "react";
// import { Route, NavLink } from "react-router-dom";
import "./Sidebar.scss";
import briefcase from "../../icons/briefcase.svg";
import home from "../../icons/home.svg";
import select_dropdown from "../../icons/select-dropdown.svg";
import user_friends from "../../icons/user-friends 1.svg";
import users from "../../icons/users 1.svg";
import sack from "../../icons/sack 1.svg";
import handshake from "../../icons/handshake-regular 1.svg";
import piggy_bank from "../../icons/piggy-bank 1.svg";
import loan from "../../icons/loan.svg";
import user_check from "../../icons/user-check 1.svg";
import user_times from "../../icons/user-times 1.svg";
// import select_dropdown from "../../icons/select-dropdown.svg";
// import select_dropdown from "../../icons/select-dropdown.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="row-option switch">
        <img src={briefcase} alt="briefcase icon" />
        <span>Switch Organization</span>
        <img src={select_dropdown} alt="select dropdown icon" />
      </div>
      <div className="row-option dashbord">
        <img src={home} alt="home icon" />
        <span>Dashboard</span>
      </div>
      <div>
        <div className="section-head">CUSTOMERS</div>
        <div className="row-option item">
          <img src={user_friends} alt="users icon" />
          <span>Users</span>
        </div>
        <div className="row-option item">
          <img src={users} alt="guarantors icon" />
          <span>Guarantors</span>
        </div>
        <div className="row-option item">
          <img src={sack} alt="loans icon" />
          <span>Loans</span>
        </div>
        <div className="row-option item">
          <img src={handshake} alt="decisions icon" />
          <span>Decision Models</span>
        </div>
        <div className="row-option item">
          <img src={piggy_bank} alt="savings icon" />
          <span>Savings</span>
        </div>
        <div className="row-option item">
          <img src={loan} alt="loan icon" />
          <span>Loan Requests</span>
        </div>
        <div className="row-option item">
          <img src={user_check} alt="whitelist icon" />
          <span>Whitelist</span>
        </div>
        <div className="row-option item">
          <img src={user_times} alt="karma icon" />
          <span>Karma</span>
        </div>
      </div>
      <div>
        <div className="section-head">BUSINESSES</div>
        <div className="row-option item">
          <img src={home} alt="home icon" />
          <span>Users</span>
        </div>
        <div className="row-option item">
          <img src={home} alt="home icon" />
          <span>Guarantors</span>
        </div>
        <div className="row-option item">
          <img src={home} alt="home icon" />
          <span>Loans</span>
        </div>
        <div className="row-option item">
          <img src={home} alt="home icon" />
          <span>Decision Models</span>
        </div>
        <div className="row-option item">
          <img src={home} alt="home icon" />
          <span>Savings</span>
        </div>
        <div className="row-option item">
          <img src={home} alt="home icon" />
          <span>Loan Requests</span>
        </div>
        <div className="row-option item">
          <img src={home} alt="home icon" />
          <span>Whitelist</span>
        </div>
        <div className="row-option item">
          <img src={home} alt="home icon" />
          <span>Karma</span>
        </div>
      </div>
      <div>
        <div className="section-head">SETTINGS</div>
        <div className="row-option item">
          <img src={home} alt="home icon" />
          <span>Preferences</span>
        </div>
        <div className="row-option item">
          <img src={home} alt="home icon" />
          <span>Fees and Pricing</span>
        </div>
        <div className="row-option item">
          <img src={home} alt="home icon" />
          <span>Audit Logs</span>
        </div>
        <div className="row-option item">
          <img src={home} alt="home icon" />
          <span>Systems Messages</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
