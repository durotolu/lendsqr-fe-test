import "./ActionsModal.scss";
import view from "../../../icons/view.svg";
import activate from "../../../icons/activate.svg";
import blacklist from "../../../icons/blacklist.svg";

function Actions() {
  return (
    <div className="popup">
      <ul>
        <li>
          <img src={view} alt="view" />
          View Details
        </li>
        <li>
          <img src={blacklist} alt="blacklist" />
          Blacklist User
        </li>
        <li>
          <img src={activate} alt="activate" />
          Activate User
        </li>
      </ul>
    </div>
  );
}

export default Actions;
