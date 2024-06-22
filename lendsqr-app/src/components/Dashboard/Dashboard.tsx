import "./Dashboard.scss";
import UsersCard from "../UsersCard/UsersCard";
import Table from "../Table/Table";
import users_normal from "../../icons/users-normal.svg";
import users_active from "../../icons/users-active.svg";
import users_loan from "../../icons/users-loan.svg";
import users_savings from "../../icons/users-savings.svg";

function Sidebar() {
  return (
    <div className="dashbord">
      <h2>Users</h2>
      <div className="cards">
        <UsersCard icon={users_normal} name={"USERS"} count={"2,453"} />
        <UsersCard icon={users_active} name={"Active Users"} count={"2,453"} />
        <UsersCard
          icon={users_loan}
          name={"Users with Loans"}
          count={"12,453"}
        />
        <UsersCard
          icon={users_savings}
          name={"Users with Savings"}
          count={"102,453"}
        />
      </div>
      <Table />
    </div>
  );
}

export default Sidebar;
