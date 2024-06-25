import "./UserDetails.scss";
import { useNavigate } from "react-router-dom";
import back from "../../icons/back.svg";
import UserDetailsInfo from "./UserDetailsInfo/UserDetailsInfo";
import UserDetailsHeader from "./UserDetailsHeader/UserDetailsHeader";
import { useEffect, useState } from "react";
import UserItem from "../../types";

function UserDetails() {
  const [user, setUser] = useState<UserItem | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userRaw = localStorage.getItem("lendsqrUserData");
    const userData = JSON.parse(userRaw as string);
    setUser(userData);
  }, [user?.id]);

  return (
    <div className="details-container">
      <button onClick={() => navigate("/dashboard")}>
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
      {user && <UserDetailsInfo user={user} />}
    </div>
  );
}

export default UserDetails;
