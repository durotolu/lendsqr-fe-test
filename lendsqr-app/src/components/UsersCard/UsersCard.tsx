import "./UsersCard.scss";
// import users_normal from "../../icons/users-normal.svg";

function UserCard({
  icon,
  name,
  count,
}: {
  icon: string;
  name: string;
  count: string;
}) {
  return (
    <div className="card">
      <div>
        <img src={icon} alt="users icon" />
      </div>
      <div className="user-type">{name}</div>
      <div className="count">{count}</div>
    </div>
  );
}

export default UserCard;