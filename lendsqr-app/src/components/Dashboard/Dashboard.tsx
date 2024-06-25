import "./Dashboard.scss";
import UsersCard from "../UsersCard/UsersCard";
import Table from "../Table/Table";
import users_normal from "../../icons/users-normal.svg";
import users_active from "../../icons/users-active.svg";
import users_loan from "../../icons/users-loan.svg";
import users_savings from "../../icons/users-savings.svg";
import user_stats from "../../utils/users-count";

function Dashboard() {

  const data = [
    {
      metaData: {
        code: "LSQFf587g90",
        tier: "1",
        accountNumber: "9912345678",
        accountBalance: "₦200,000.00",
        bank: "Providus Bank",
        dateJoined: "Apr 30, 2020 10:00 AMk",
        status: "pending",
        loans: true,
        savings: true,
      },
      personalInformation: {
        fullName: "Grace Effiom",
        phoneNumber: "07060780922",
        email: "grace@gmail.com",
        bvn: "07060780922",
        gender: "Female",
        maritalStatus: "Single",
        childCount: 0,
        residenceType: "Parent’s Apartment",
      },
      educationAndEmployment: {
        educationLevel: "B.Sc",
        employmentStatus: "Employed",
        employmentSector: "FinTech",
        employmentDuration: "2 years",
        officeEmail: "grace@lendsqr.com",
        monthlyIncome: "₦200,000.00- ₦400,000.00",
        loanRepayment: "40,000",
      },
      socials: {
        twitter: "@grace_effiom",
        facebook: "Grace Effiom",
        instagram: "@grace_effiom",
      },
      guarantor: [
        {
          fullName: "Debby Ogana",
          phoneNumber: "07060780922",
          emailAddress: "debby@gmail.com",
          relationship: "Sister",
        },
        {
          fullName: "Debby Ogana",
          phoneNumber: "07060780922",
          emailAddress: "debby@gmail.com",
          relationship: "Sister",
        },
      ],
    },
  ];

  const [totalUsers, activeUsers, loansUsers, savingsUsers] = user_stats(data);

  return (
    <div className="dashbord">
      <h2>Users</h2>
      <div className="cards">
        <UsersCard icon={users_normal} name={"USERS"} count={totalUsers} />
        <UsersCard icon={users_active} name={"Active Users"} count={activeUsers} />
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
      <Table />
    </div>
  );
}

export default Dashboard;
