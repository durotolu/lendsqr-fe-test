import "./Header.scss";
import logo from "../../icons/logo.svg";
import search_icon from "../../icons/search-icon.svg";
import notification from "../../icons/notification.svg";
import avatar from "../../icons/avatar.svg";
import dropdown from "../../icons/dropdown.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const logout = async () => {
    localStorage.removeItem("lendsqrUserEmail");

    await localStorage.removeItem("lendsqrUserEmail");
    const email = await localStorage.getItem("lendsqrUserEmail");
    if (!email) {
      navigate("/");
    }
  };

  return (
    <header>
      <div className="search-nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="search">
          <input placeholder="Search for anything" />
          <div className="search-suffix">
            <img src={search_icon} alt="search icon" />
          </div>
        </div>
      </div>
      <div className="profile-right">
        <div className="profile-nav">
          <div>
            <a href="/#">Docs</a>
          </div>
          <div>
            <img src={notification} alt="notification bell" />
          </div>
          <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
            <img src={avatar} alt="avatar" />
            <span className="profile-name">Adedeji</span>
            <img src={dropdown} alt="dropdown" />
            {isOpen && (
              <div className="popup-profile" onClick={logout}>
                <div>Logout</div>
              </div>
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      )}
    </header>
  );
}

export default Header;
