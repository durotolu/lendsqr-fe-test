import "./UsersCard.scss";

function UserCard({
  icon,
  name,
  count,
}: {
  icon: string;
  name: string;
  count: number;
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
