import "./Dashboard.scss";
import UsersCard from "../UsersCard/UsersCard";
import Table from "../Table/Table";
import users_normal from "../../icons/users-normal.svg";
import users_active from "../../icons/users-active.svg";
import users_loan from "../../icons/users-loan.svg";
import users_savings from "../../icons/users-savings.svg";
import user_stats from "../../utils/users-count";
import UserItem from "../../types";
import { useEffect, useState } from "react";

function Dashboard() {
  const [users, setUsers] = useState<UserItem[]>([]);

  async function fetchUsers() {
    const api = 'https://run.mocky.io/v3/3b2a9ecd-1ca9-431c-a9c5-bb31174db0a1';
    const response = await fetch(api);
    const usersData = await response.json();
    setUsers(usersData)
  }

  useEffect(() => {
    fetchUsers()
  }, []);

  const [totalUsers, activeUsers, loansUsers, savingsUsers] = user_stats(users);

  return (
    <div className="dashbord">
      <h2>Users</h2>
      <div className="cards">
        <UsersCard icon={users_normal} name={"USERS"} count={totalUsers} />
        <UsersCard
          icon={users_active}
          name={"Active Users"}
          count={activeUsers}
        />
        <UsersCard
          icon={users_loan}
          name={"Users with Loans"}
          count={loansUsers}
        />
        <UsersCard
          icon={users_savings}
          name={"Users with Savings"}
          count={savingsUsers}
        />
      </div>
      <Table users={users} />
    </div>
  );
}

export default Dashboard;
