import React from "react";
import "./style.css";

export const BigOutline = ({ className, label, setInputValue }) => {
  return (
    <div className={`big-outline ${className}`}>
      <div className="input-label">
        <input className="text-wrapper" onChange={(e)=>{ setInputValue(e.target.value) }}></input>
      </div>
      <div className="label">{label}</div>
    </div>
  );
};
