import React from "react";
import "./style.css";

export const ChatUser = ({ className, content }) => {
  return (
    <div className={`chat-user ${className}`}>
      <div className="chat-bubble">
        {content}
      </div>
    </div>
  );
};