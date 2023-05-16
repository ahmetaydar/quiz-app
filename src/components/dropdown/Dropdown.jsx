import React from "react";
import "./Dropdown.css";

const Dropdown = ({ data, setDifficultyChange }) => {
  return (
    <div className="dropdown">
      <select
        name=""
        id=""
        onChange={(e) => setDifficultyChange(e.target.value)}
      >
        {data.map((dt, i) => (
          <option value={dt}>{dt.toUpperCase()}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
