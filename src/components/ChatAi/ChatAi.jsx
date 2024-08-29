import React from "react";
import "./style.css";

export const ChatAi = ({ className }) => {
  return (
    <div className={`chat-AI ${className}`}>
      <div className="chat-bubble" />
      <img className="DTC-image" alt="Dtc image" src="https://c.animaapp.com/BLUS06c8/img/dtcimage-1@2x.png" />
    </div>
  );
};
