import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import "./UserPage.scss";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

function UsersPage({ children }: { children: ReactNode }) {
  const user = localStorage.getItem("lendsqrUserEmail");
  
  if (!user) return <Navigate replace to="/" />;
  return (
    <div>
      <Header />
      <div className="body-container">
        <Sidebar />
        <div className="child">{children}</div>
      </div>
    </div>
  );
}

export default UsersPage;
