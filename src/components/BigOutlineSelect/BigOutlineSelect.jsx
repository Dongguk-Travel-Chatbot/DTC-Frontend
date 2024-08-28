import React, { useState } from "react";
import "./style.css";
import ArrowDropDown from "src/assets/ArrowDropDown.svg"; // 드롭다운 화살표 아이콘

export const BigOutlineSelect = ({ className, label, optionList, selectedValue, setSelectedValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  // 드롭다운 항목
  const options = optionList

  // 드롭다운 열고 닫기
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // 항목 선택
  const handleSelect = (option) => {
    setSelectedValue(option); // 선택된 값을 설정
    setIsOpen(false); // 드롭다운 닫기
  };

  return (
    <div className={`big-outline-select ${className}`}>
      <div className="label-2">{label}</div>
      <div className="value" onClick={toggleDropdown}>
        <div className="div">{selectedValue}</div>
        <img
          className={`arrow-drop-down ${isOpen ? "open" : ""}`}
          alt="Arrow drop down"
          src={ArrowDropDown}
        />
      </div>

      {isOpen && (
        <div className="dropdown-options">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
