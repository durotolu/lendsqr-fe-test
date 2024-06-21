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
import briefcase_op from "../../icons/briefcase 1.svg";
import bank from "../../icons/bank.svg";
import coins_solid from "../../icons/coins-solid 1.svg";
import transaction from "../../icons/transaction.svg";
import galaxy from "../../icons/galaxy 1.svg";
import user_cog from "../../icons/user-cog 1.svg";
import scroll from "../../icons/scroll 1.svg";
import chart_bar from "../../icons/chart-bar 2.svg";
import sliders from "../../icons/sliders-h 1.svg";
import badge_percent from "../../icons/badge-percent.svg";
import clipboard_list from "../../icons/clipboard-list.svg";
import tire from "../../icons/tire 1.svg";
import sign_out from "../../icons/sign-out.svg";

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
        <div className="row-option item active">
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
          <img src={briefcase_op} alt="organization icon" />
          <span>Organization</span>
        </div>
        <div className="row-option item">
          <img src={loan} alt="loan icon" />
          <span>Loan Products</span>
        </div>
        <div className="row-option item">
          <img src={bank} alt="savings icon" />
          <span>Savings Products</span>
        </div>
        <div className="row-option item">
          <img src={coins_solid} alt="fees icon" />
          <span>Fees and Charges</span>
        </div>
        <div className="row-option item">
          <img src={transaction} alt="transactions icon" />
          <span>Transactions</span>
        </div>
        <div className="row-option item">
          <img src={galaxy} alt="services icon" />
          <span>Services</span>
        </div>
        <div className="row-option item">
          <img src={user_cog} alt="service account icon" />
          <span>Service Account</span>
        </div>
        <div className="row-option item">
          <img src={scroll} alt="settlements icon" />
          <span>Settlements</span>
        </div>
        <div className="row-option item">
          <img src={chart_bar} alt="reports icon" />
          <span>Reports</span>
        </div>
      </div>
      <div>
        <div className="section-head">SETTINGS</div>
        <div className="row-option item">
          <img src={sliders} alt="preferences icon" />
          <span>Preferences</span>
        </div>
        <div className="row-option item">
          <img src={badge_percent} alt="pricing icon" />
          <span>Fees and Pricing</span>
        </div>
        <div className="row-option item">
          <img src={clipboard_list} alt="audit icon" />
          <span>Audit Logs</span>
        </div>
        <div className="row-option item">
          <img src={tire} alt="systems icon" />
          <span>Systems Messages</span>
        </div>
      </div>

      <div className="row-option dashbord logout">
        <img src={sign_out} alt="sign out icon" />
        <span>Logout</span>
      </div>
      <span className="row-option version">v1.2.0</span>
    </div>
  );
}

export default Sidebar;
