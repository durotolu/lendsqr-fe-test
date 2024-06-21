import "./Dashboard.scss";
import UsersCard from "../UsersCard/UsersCard";
import briefcase from "../../icons/briefcase.svg";

function Sidebar() {
  return (
    <div className="dashbord">
      <h2>Users</h2>
      <UsersCard />
    </div>
  );
}

export default Sidebar;
