import React from "react";
import "./style.css";

export const ChatUser = ({ className }) => {
  return <div className={`chat-user ${className}`}>
    <div className="chat-bubble"></div>
  </div>;
};
