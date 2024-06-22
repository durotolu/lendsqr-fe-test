import "./Table.scss";
import filter from "../../icons/filter-results-button.svg";
import grab from "../../icons/more.svg";

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
          <td>Alfreds Futterkiste</td>
          <td>adedeji@lendsqr.com</td>
          <td>08160780928</td>
          <td>Apr 30, 2020 10:00 AM</td>
          <td>Germany</td>
          <td>
            <img src={grab} alt="grab" />
          </td>
        </tr>
        <tr>
          <td>Lendsqr</td>
          <td>Centro comercial Moctezuma</td>
          <td>adedeji@lendsqr.com</td>
          <td>08160780928</td>
          <td>Apr 30, 2020 10:00 AM</td>
          <td>Mexico</td>
          <td>
            <img src={grab} alt="grab" />
          </td>
        </tr>
        <tr>
          <td>Lendsqr</td>
          <td>Ernst Handel</td>
          <td>adedeji@lendsqr.com</td>
          <td>08160780928</td>
          <td>Apr 30, 2020 10:00 AM</td>
          <td>Austria</td>
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
          <td>UK</td>
          <td>
            <img src={grab} alt="grab" />
          </td>
        </tr>
        <tr>
          <td>Lendsqr</td>
          <td>Laughing Bacchus Winecellars</td>
          <td>adedeji@lendsqr.com</td>
          <td>08160780928</td>
          <td>Apr 30, 2020 10:00 AM</td>
          <td>Canada</td>
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
          <td>Italy</td>
          <td>
            <img src={grab} alt="grab" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
