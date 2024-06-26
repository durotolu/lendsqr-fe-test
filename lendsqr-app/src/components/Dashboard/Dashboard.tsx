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
import formatDate from "../../utils/format-date";

function Dashboard() {
  const [users, setUsers] = useState<UserItem[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserItem[]>([]);
  const [usersPerPage, setUsersPerPage] = useState<number>(0);
  const [filters, setFilters] = useState<{
    organization: string;
    username: string;
    email: string;
    date: string;
    phoneNumber: string;
    status: string;
  }>({
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });

  const onFilterSelection = (e: any) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const onFilter = () => {
    const { organization, username, email, date, phoneNumber, status } =
      filters;

    const filtered = users.filter(
      (user) => {
        const organizationFilter = organization
          ? user.metaData.organization === organization
          : true;
        const nameFilter = user.personalInformation.fullName
          .toLowerCase()
          .includes(username.toLowerCase());
        const emailFilter = user.personalInformation.email
          .toLowerCase()
          .includes(email.toLowerCase());
        const dateFilter = date
          ? user.metaData.dateJoined
              .toLowerCase()
              .includes(formatDate(date).toLowerCase())
          : true;
        const phoneNumberFilter =
          user.personalInformation.phoneNumber.includes(phoneNumber);
        const statusFilter = status ? user.metaData.status === status : true;

        return (
          organizationFilter &&
          nameFilter &&
          emailFilter &&
          dateFilter &&
          phoneNumberFilter &&
          statusFilter
        );
      }
    );
    setFilteredUsers(filtered);
    if (filtered.length < usersPerPage) setUsersPerPage(filtered.length);
  };

  const onReset = () => {
    setFilters({
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    });
  };

  async function fetchUsers() {
    try {
      const api =
        "https://run.mocky.io/v3/3b2a9ecd-1ca9-431c-a9c5-bb31174db0a1";
      const response = await fetch(api);
      const usersData = await response.json();
      setUsers(usersData);
      setFilteredUsers(usersData);
      setUsersPerPage(10);
    } catch (error) {
      throw "Failed to fetch user data, check your connection and try again";
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
        <Table
          itemsPerPage={usersPerPage}
          users={filteredUsers}
          onFilterSelection={onFilterSelection}
          onFilter={onFilter}
          onReset={onReset}
        />
        <div className="item-details">
          Showing{" "}
          <select
            disabled={!filteredUsers.length}
            value={usersPerPage}
            onChange={(e) => setUsersPerPage(parseInt(e.target.value))}
          >
            <option defaultValue="" disabled hidden>
              0
            </option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
            <option value={30}>30</option>
          </select>
          out of {filteredUsers.length}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
