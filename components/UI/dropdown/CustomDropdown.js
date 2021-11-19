import React, { useState } from "react";
import CustomDropdownStyle from "./CustomDropdown.module.scss";

const CustomDropdown = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [labelItem, setLabelItem] = useState(null);
  const [typeDropdown, setTypeDropdown] = useState(null);

  const checkType = (value) => {
    setTypeDropdown(value);
  };
  const showDropdown = () => {
    console.log('%cCustomDropdown.js line:15 "he"', "color: #007acc;", "he");
    setIsOpen(true);
    // document.addEventListener("click", hideDropdown);
  };
  const hideDropdown = () => {
    setIsOpen(false);
    document.removeEventListener("click", hideDropdown);
  };
  const chooseItem = (value) => {
    if (this.state.labelItem !== value) {
      setLabelItem(value);
    }
  };

  let renderDataDropDown = (item, index) => {
    const { value, label } = typeDropdown
      ? { value: index, label: item }
      : item;
    return (
      <li key={index} value={value} onClick={() => chooseItem(label)}>
        <a>{label}</a>
      </li>
    );
  };

  return (
    <div
      className={`${CustomDropdownStyle["dropdown"]} ${
        isOpen ? CustomDropdownStyle["open"] : ""
      }`}
    >
      <button
        className={CustomDropdownStyle["dropdown-toggle"]}
        type="button"
        onClick={() => showDropdown()}
      >
        {labelItem}
        <span className={CustomDropdownStyle["caret"]}></span>
      </button>
      <ul className={CustomDropdownStyle["dropdown-menu"]}>
        {list.map(renderDataDropDown)}
      </ul>
    </div>
  );
};

export default CustomDropdown;
