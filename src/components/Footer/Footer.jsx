/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Footer = ({ className, overlapGroupClassName }) => {
  return (
    <div className={`footer ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className="footer-rectangle" />
        <div className="user">
          <div className="icons-user">
            <img className="user-2" alt="User" src="https://c.animaapp.com/GmpRJdJZ/img/user-1@2x.png" />
          </div>
        </div>
        <div className="community">
          <img className="community-2" alt="Community" src="https://c.animaapp.com/GmpRJdJZ/img/community-1@2x.png" />
        </div>
        <div className="chat">
          <img
            className="icons-chat"
            alt="Icons chat"
            src="https://c.animaapp.com/GmpRJdJZ/img/icons---chat-1@2x.png"
          />
        </div>
        <div className="home">
          <img className="icons-home" alt="Icons home" src="https://c.animaapp.com/GmpRJdJZ/img/icons-home-1@2x.png" />
        </div>
      </div>
    </div>
  );
};
