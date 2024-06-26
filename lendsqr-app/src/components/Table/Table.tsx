import { useState } from "react";
import ReactPaginate from 'react-paginate';
import "./Table.scss";
import filter from "../../icons/filter-results-button.svg";
import grab from "../../icons/more.svg";
import Actions from "./ActionsModal/ActionsModal";
import Filter from "./Filter/Filter";
import UserItem from "../../types";

const headers: string[] = [
  "organization",
  "Username",
  "Email",
  "Phone number",
  "Date joined",
  "Status",
];

function Items({ currentItems }: { currentItems: UserItem[] }) {
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
          {currentItems.map((user) => (
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

function Table({ itemsPerPage, users }: { itemsPerPage: number, users: UserItem[] }) {
  const [itemOffset, setItemOffset] = useState(0);
  
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = users.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  const handlePageClick = (event: { selected: number; }) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        containerClassName={"pagination-container"}
        previousClassName={"pagination-previous"}
        nextClassName={"pagination-next"}
        activeLinkClassName={"pagination-active"}
        disabledLinkClassName={'pagination-disabled'}
        pageClassName={'pagination-page'}
      />
    </>
  );
}

export default Table;
