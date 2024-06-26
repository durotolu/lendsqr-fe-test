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
  const [usersPerPage, setUsersPerPage] = useState<number>(0);

  async function fetchUsers() {
    try {
      const api =
        "https://run.mocky.io/v3/3b2a9ecd-1ca9-431c-a9c5-bb31174db0a1";
      const response = await fetch(api);
      const usersData = await response.json();
      setUsers(usersData);
      setUsersPerPage(10);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    fetchUsers();
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
      <div className="table-container">
        <Table itemsPerPage={usersPerPage} users={users} />
        <div className="item-details">
          Showing{" "}
            <select disabled={!users.length} value={usersPerPage} onChange={(e) => setUsersPerPage(parseInt(e.target.value))}>
              <option defaultValue="" disabled hidden>0</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
              <option value={30}>30</option>
            </select>
          out of {totalUsers}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
