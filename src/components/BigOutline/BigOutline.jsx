import React from "react";
import "./style.css";

export const BigOutline = ({ className, label, setInputValue, initialValue }) => {
  return (
    <div className={`big-outline ${className}`}>
      <div className="input-label">
        <input
          className="text-wrapper"
          defaultValue={initialValue} // 기본값 설정
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <div className="label">{label}</div>
    </div>
  );
};
