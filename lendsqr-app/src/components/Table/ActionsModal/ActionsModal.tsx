import "./ActionsModal.scss";
import view from "../../../icons/view.svg";
import activate from "../../../icons/activate.svg";
import blacklist from "../../../icons/blacklist.svg";
import { useNavigate } from "react-router-dom";
import UserItem from "../../../types";

function Actions({ user }: { user: UserItem }) {
  const navigate = useNavigate();

  const goToUserDetails = async () => {
    await localStorage.setItem("lendsqrUserData", JSON.stringify(user));
    const userRaw = await localStorage.getItem("lendsqrUserData");

    if (userRaw) {
      const userData = JSON.parse(userRaw);
      if (userData.id === user.id) navigate(`/user/${userData.id}`);
    }
  };

  return (
    <div className="popup">
      <ul>
        <li onClick={goToUserDetails}>
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
