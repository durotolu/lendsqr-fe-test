import UserItem from "../../../types";
import "./UserDetailsInfo.scss";

function UserDetailsInfo({ user }: { user: UserItem }) {
  const title = {
    fullName: "FULL NAME",
    phoneNumber: "PHONE NUMBER",
    email: "EMAIL ADDRESS",
    emailAddress: "EMAIL ADDRESS",
    maritalStatus: "MARITAL STATUS",
    childCount: "CHILDREN",
    residenceType: "Type of residence",
    employmentDuration: "Duration of employmen",
    employmentStatus: "employment status",
    employmentSector: "sector of employment",
    officeEmail: "office email",
    monthlyIncome: "Monthly income",
    loanRepayment: "loan repayment",
    educationLevel: "level of education",
  };
  return (
    <div className="details-body">
      <div className="row">
        <h3>Personal Information</h3>
        <div className="row-body-container">
          {Object.entries(user.personalInformation).map(([key, value]) => (
            <div key={key} className="row-body">
              <div>
                <div className="title">
                  {title[key as keyof typeof title] || key}
                </div>
                <div className="content">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <h3>Education and Employment</h3>
        <div className="row-body-container">
          {Object.entries(user.educationAndEmployment).map(([key, value]) => (
            <div key={key} className="row-body">
              <div>
                <div className="title">
                  {title[key as keyof typeof title] || key}
                </div>
                <div className="content">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <h3>Socials</h3>
        <div className="row-body-container">
          {Object.entries(user.socials).map(([key, value]) => (
            <div key={key} className="row-body">
              <div>
                <div className="title">
                  {title[key as keyof typeof title] || key}
                </div>
                <div className="content">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <h3>Guarantor</h3>
        <div className="row-guarantor">
          {user.guarantor.map((person) => (
            <div className="row-body-container guarantor">
              {Object.entries(person).map(([key, value]) => (
                <div key={key} className="row-body">
                  <div>
                    <div className="title">
                      {title[key as keyof typeof title] || key}
                    </div>
                    <div className="content">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserDetailsInfo;
