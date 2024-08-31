import React, { useEffect, useState } from 'react';
import "./style.css";
import { useNavigate } from "react-router-dom";

export const ChatAi = ({ className, content, isSelected, onClick }) => {
  const bubbleClassName = `${className} ${isSelected ? 'selected' : ''}`;
  const navigate = useNavigate();
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    if (transition) {
      navigate("/main");
    }
  }, [transition, navigate]);

  return (
    <div className={`chat-AI`} onClick={onClick}>
      <div className={bubbleClassName}>
        <span className="custom-text" dangerouslySetInnerHTML={{ __html: content }}></span>
      </div>
      {bubbleClassName.includes('chat-bubble-only') || bubbleClassName.includes('chat-bubble-last') || bubbleClassName.includes('chat-bubble-final') ? (
        <img className="DTC-image" alt="Dtc image" src="https://c.animaapp.com/BLUS06c8/img/dtcimage-1@2x.png" />
      ) : null}
    </div>
  );
};