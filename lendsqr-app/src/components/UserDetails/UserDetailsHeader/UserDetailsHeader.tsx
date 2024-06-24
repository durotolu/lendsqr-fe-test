import "./UserDetailsHeader.scss";
import star_filled from "../../../icons/star-1.svg";
import star_empty from "../../../icons/star-2.svg";
import avatar_placeholder from "../../../icons/avatar-placeholder.svg";

function UserDetailsHeader() {
  return (
    <div className="details">
      <div className="details-header">
        <img src={avatar_placeholder} alt="Avatar placeholder" />
        <div className="details-header-right">
          <div className="details-header-right-section">
            <div className="top-text">Grace Effiom</div>
            <div className="bottom-text-code">LSQFf587g90</div>
          </div>
          <div className="star-container details-header-right-section">
            <div className="tier-text">User’s Tier</div>
            <div className="stars">
              <img src={star_filled} alt="Star filled" />
              <img src={star_empty} alt="Star empty" />
              <img src={star_empty} alt="Star empty" />
            </div>
          </div>
          <div className="details-header-right-section">
            <div className="top-text">₦200,000.00</div>
            <div className="bottom-text-account">9912345678/Providus Bank</div>
          </div>
        </div>
      </div>
      <nav>
        <a className="active-nav">General Details</a>
        <a>Documents</a>
        <a>Bank Details</a>
        <a>Loans</a>
        <a>Savings</a>
        <a>App and System</a>
      </nav>
    </div>
  );
}

export default UserDetailsHeader;
