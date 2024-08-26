import React from "react";
import "./style.css";

export const NextButton = ({ className }) => {
  return (
    <button className={`next-button ${className}`}>
      <div className="text-wrapper">NEXT</div>
    </button>
  );
};
