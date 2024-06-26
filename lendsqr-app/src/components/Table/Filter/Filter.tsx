import { ChangeEventHandler } from "react";
import "./Filter.scss";

function Filter({
  onFilterSelection,
  onFilter,
  onReset,
}: {
  onFilterSelection: ChangeEventHandler<HTMLElement>;
  onFilter: () => void;
  onReset: () => void;
}) {
  const fields: {
    label: string;
    type: string;
    placeholder: string;
    name: string;
    options?: string[];
  }[] = [
    {
      label: "Organization",
      type: "select",
      placeholder: "Select",
      name: "organization",
      options: ["Lendsqr"],
    },
    { label: "Username", type: "text", placeholder: "User", name: "username" },
    { label: "Email", type: "email", placeholder: "Email", name: "email" },
    { label: "Date", type: "date", placeholder: "Date", name: "date" },
    {
      label: "Phone Number",
      type: "number",
      placeholder: "Phone Number",
      name: "phoneNumber",
    },
    {
      label: "Status",
      type: "select",
      placeholder: "Select",
      name: "status",
      options: ["Pending", "Active", "Inactive", "Blacklisted"],
    },
  ];

  return (
    <div className="filter-modal">
      <div className="filter-options">
        {fields.map(({ label, placeholder, type, options, name }) => (
          <div key={label}>
            <label>{label}</label>
            <div className="input-div">
              {type === "date" ? (
                <input
                  className="input-field"
                  type="date"
                  placeholder={placeholder}
                  onChange={onFilterSelection}
                />
              ) : type === "select" ? (
                <select
                  name={name}
                  className="input-field"
                  defaultValue={""}
                  onChange={onFilterSelection}
                >
                  <option value="" disabled hidden>{placeholder}</option>
                  {options?.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  className="input-field"
                  placeholder={placeholder}
                  name={name}
                  type={type}
                  onChange={onFilterSelection}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="filter-footer">
        <button onClick={onReset} className="reset-button">Reset</button>
        <button onClick={onFilter} className="filter-button">Filter</button>
      </div>
    </div>
  );
}

export default Filter;
