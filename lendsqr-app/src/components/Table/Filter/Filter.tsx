import "./Filter.scss";

function Filter() {
  const fields: {
    label: string;
    type: string;
    placeholder: string;
  }[] = [
    { label: "Organization", type: "select", placeholder: "Select" },
    { label: "Username", type: "text", placeholder: "User" },
    { label: "Email", type: "text", placeholder: "Email" },
    { label: "Date", type: "text", placeholder: "Date" },
    { label: "Phone Number", type: "text", placeholder: "Phone Number" },
    { label: "Status", type: "select", placeholder: "Select" },
  ];
  return (
    <div className="filter-modal">
      <div className="filter-options">
        {fields.map(({label, placeholder, type}) => (
          <div key={label}>
            <label>{label}</label>
            <div className="input-div">
              <select className="input-field">
                <option>{placeholder}</option>
              </select>
            </div>
          </div>
        ))}
        {/* <div>
          <label>Organization</label>
          <div className="input-div">
            <select className="input-field">
              <option>Select</option>
            </select>
          </div>
        </div>
        <div>
          <label>Username</label>
          <div className="input-div">
            <input className="input-field" placeholder="User" />
          </div>
        </div> */}
      </div>
      <div className="filter-footer">
        <button className="reset-button">Reset</button>
        <button className="filter-button">Filter</button>
      </div>
    </div>
  );
}

export default Filter;
