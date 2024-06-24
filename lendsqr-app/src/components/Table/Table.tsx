import "./Table.scss";
import filter from "../../icons/filter-results-button.svg";
import grab from "../../icons/more.svg";
import Actions from "../ActionsModal/ActionsModal";
import Filter from "../Filter/Filter";

function Table() {
  return (
    <div className="table">
      <table>
        <tr>
          <th className="table-header">
            <div>
              organization <img src={filter} alt="filter" />
            </div>
          </th>
          <th className="table-header">
            <div>
              Username <img src={filter} alt="filter" />
            </div>
          </th>
          <th className="table-header">
            <div>
              Email <img src={filter} alt="filter" />
            </div>
          </th>
          <th className="table-header">
            <div>
              Phone number <img src={filter} alt="filter" />
            </div>
          </th>
          <th className="table-header">
            <div>
              Date joined <img src={filter} alt="filter" />
            </div>
          </th>
          <th className="table-header">
            <div>
              Status <img src={filter} alt="filter" />
            </div>
          </th>
        </tr>
        <tr>
          <td>Lendsqr</td>
          <td>Ernst Handel</td>
          <td>adedeji@lendsqr.com</td>
          <td>08160780928</td>
          <td>Apr 30, 2020 10:00 AM</td>
          <td>
            <div>
              <span className="status pending">Pending</span>
            </div>
          </td>
          <td>
            <img src={grab} alt="grab" />
          </td>
        </tr>
        <tr>
          <td>Lendsqr</td>
          <td>Island Trading</td>
          <td>adedeji@lendsqr.com</td>
          <td>08160780928</td>
          <td>Apr 30, 2020 10:00 AM</td>
          <td>
            <div>
              <span className="status inactive">Inactive</span>
            </div>
          </td>
          <td>
            <img src={grab} alt="grab" />
            <Actions />
          </td>
        </tr>
        <tr>
          <td>Lendsqr</td>
          <td>Laughing Bacchus Winecellars</td>
          <td>adedeji@lendsqr.com</td>
          <td>08160780928</td>
          <td>Apr 30, 2020 10:00 AM</td>
          <td>
            <div>
              <span className="status active">Active</span>
            </div>
          </td>
          <td>
            <img src={grab} alt="grab" />
          </td>
        </tr>
        <tr>
          <td>Lendsqr</td>
          <td>Magazzini Alimentari Riuniti</td>
          <td>adedeji@lendsqr.com</td>
          <td>08160780928</td>
          <td>Apr 30, 2020 10:00 AM</td>
          <td>
            <div>
              <span className="status blacklisted">Blacklisted</span>
            </div>
          </td>
          <td>
            <img src={grab} alt="grab" />
          </td>
        </tr>
      </table>
      <Filter />
    </div>
  );
}

export default Table;
