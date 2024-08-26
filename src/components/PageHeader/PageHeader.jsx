/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const PageHeader = ({ className }) => {
  return (
    <div className={`page-header ${className}`}>
      <div className="back-button">
        <img className="vector-2" alt="Vector" src="https://c.animaapp.com/GmpRJdJZ/img/vector-7@2x.png" />
      </div>
      <div className="page-title">여행 게시판</div>
      <img
        className="write-post-button"
        alt="Write post button"
        src="https://c.animaapp.com/GmpRJdJZ/img/writepostbutton-1@2x.png"
      />
    </div>
  );
};
