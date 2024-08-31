import React from "react";
import "./style.css";

export const NextButton = ({ className, onClick }) => {
  return (
    <button className={`next-button ${className}`} onClick={onClick}>
      <div className="text-wrapper">NEXT</div>
    </button>
  );
};
