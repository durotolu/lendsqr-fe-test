import "./UsersCard.scss";
import users_normal from "../../icons/users-normal.svg";

function UserCard() {
  return (
    <div className="card">
      <div>
        <img src={users_normal} alt="users icon" />
      </div>
      <div className="user-type">USERS</div>
      <div className="count">2,453</div>
    </div>
  );
}

export default UserCard;
