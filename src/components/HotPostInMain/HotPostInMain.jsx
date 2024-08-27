/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const HotPostInMain = ({ className }) => {
  return (
    <div className={`hot-post-in-main ${className}`}>
      <div className="location-image" />
      <div className="text-wrapper">혼자 가면 좋은 여행지</div>
      <div className="location">
        <img className="location-2" alt="Location" src="https://c.animaapp.com/N1lyDyYc/img/location-1@2x.png" />
        <div className="div">장소</div>
      </div>
      <div className="writer">
        <div className="text-wrapper-2">작성자</div>
        <img className="image" alt="Image" src="https://c.animaapp.com/N1lyDyYc/img/image-99-1@2x.png" />
      </div>
      <div className="post-like">
        <div className="text-wrapper-3">21</div>
        <img className="vector" alt="Vector" src="https://c.animaapp.com/N1lyDyYc/img/vector-1@2x.png" />
      </div>
    </div>
  );
};
