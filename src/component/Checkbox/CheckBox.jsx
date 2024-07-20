import React from "react";
import "./Checkbox.css";

const CheckBox = ({ checkboxStyle, label, divStyles, handleCheck , isChecked }) => {
  return (
    <div
      className={`checkbox font-montserrat text-sm font-normal leading-[18.2px] ${divStyles} `}
    >
      {label && (
        <label htmlFor="checkbox" className="flex items-center justify-center">
          {label}
        </label>
      )}
      <input
        onClick={handleCheck}
        id="checkbox"
        type="checkbox"
        checked = {isChecked}
        className={`checkbox custom-checkbox  ${checkboxStyle}`}
      />
    </div>
  );
};

export default CheckBox;
