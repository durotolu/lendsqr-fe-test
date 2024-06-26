import "./ActionsModal.scss";
import view from "../../../icons/view.svg";
import activate from "../../../icons/activate.svg";
import blacklist from "../../../icons/blacklist.svg";
import { useNavigate } from "react-router-dom";
import UserItem from "../../../types";

function Actions({ user }: { user: UserItem }) {
  const navigate = useNavigate();

  const actionOptions = {
    Pending: ["Blacklist User", "Activate User"],
    Active: ["Blacklist User", "Inactivate User"],
    Inactive: ["Blacklist User", "Activate User"],
    Blacklisted: ["Inactivate User", "Activate User"],
  };
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

        {actionOptions[user.metaData.status as keyof typeof actionOptions].map(
          (action) => (
            <li>
              <img src={blacklist} alt={action} />
              {action}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Actions;
