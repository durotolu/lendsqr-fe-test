import "./UserDetails.scss";
import back from "../../icons/back.svg";
import UserDetailsInfo from "./UserDetailsInfo/UserDetailsInfo";
import UserDetailsHeader from "./UserDetailsHeader/UserDetailsHeader";

function UserDetails() {
  return (
    <div className="details-container">
      <button>
        <img src={back} alt="Back" /> Back to Users
      </button>
      <div className="user-header">
        <h2>User Details</h2>
        <div className="action-user">
          <button className="blacklist-button">Blacklist User</button>
          <button className="activate-button">Activate User</button>
        </div>
      </div>
      <UserDetailsHeader />
      <UserDetailsInfo />
    </div>
  );
}

export default UserDetails;
