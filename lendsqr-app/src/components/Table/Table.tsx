import "./Table.scss";
import filter from "../../icons/filter-results-button.svg";
import grab from "../../icons/more.svg";
import Actions from "./ActionsModal/ActionsModal";
import Filter from "./Filter/Filter";
import UserItem from "../../types";
import { useState } from "react";

const headers: string[] = [
  "organization",
  "Username",
  "Email",
  "Phone number",
  "Date joined",
  "Status",
];

function Table({ users }: { users: UserItem[] }) {
  const [userActionOpen, setUserActionOpen] = useState<string | null>(null);
  const [titleFilterOpen, setTitleFilterOpen] = useState<string | null>(null);

  const closeModals = () => {
    setUserActionOpen(null);
    setTitleFilterOpen(null);
  };

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className="table-header">
                <div>
                  {header}
                  <button
                    onClick={() => setTitleFilterOpen(header)}
                    className="modal-button"
                  >
                    <img src={filter} alt="filter" />
                  </button>
                  {header === titleFilterOpen && <Filter />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.metaData.organization}</td>
              <td>{user.personalInformation.fullName}</td>
              <td>{user.personalInformation.email}</td>
              <td>{user.personalInformation.phoneNumber}</td>
              <td>{user.metaData.dateJoined}</td>
              <td>
                <div>
                  <span className={`status ${user.metaData.status}`}>{user.metaData.status}</span>
                </div>
              </td>
              <td>
                <button
                  className="modal-button"
                  onClick={() => setUserActionOpen(user.id)}
                >
                  <img src={grab} alt="grab" />
                </button>
                {userActionOpen === user.id && <Actions user={user} />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {(userActionOpen || titleFilterOpen) && (
        <div className="modal-backdrop" onClick={closeModals}></div>
      )}
    </div>
  );
}

export default Table;
