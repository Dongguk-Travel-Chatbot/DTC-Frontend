/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Post = ({ className, props }) => {
  return (
    <div className={`post ${className}`}>
      
      <div className="div">{props.title}</div>
      <div className="text-wrapper-2">닉네임</div>
      <div className="text-wrapper">6/14</div>
      <img className="image" alt="Image" src="https://c.animaapp.com/GmpRJdJZ/img/image-99-1@2x.png" />

      <div className="post-like">
        <img className="vector" alt="Vector" src="https://c.animaapp.com/GmpRJdJZ/img/vector-6@2x.png" />
        <div className="text-wrapper-4">11</div>
      </div>

      <div className="post-comment">
        <div className="text-wrapper-3">10</div>
        <img className="img" alt="Vector" src="https://c.animaapp.com/GmpRJdJZ/img/vector-5@2x.png" />
      </div>

      <div className="post-scrap">
        <div className="text-wrapper-3">21</div>
        <img className="vector" alt="Vector" src="https://c.animaapp.com/GmpRJdJZ/img/vector-4@2x.png" />
      </div>

      <img className="line" alt="Line" src="https://c.animaapp.com/GmpRJdJZ/img/line-5-1@2x.png" />
    </div>
  );
};
