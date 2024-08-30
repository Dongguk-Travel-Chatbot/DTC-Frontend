import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const PageHeader = ({ className, props, onWriteIconClick }) => {
  const navigate = useNavigate();

  const handleWriteClick = () => {
    if (onWriteIconClick) {
      onWriteIconClick();
    }
    navigate(props.writeUrl);
  };

  return (
    <div className={`page-header ${className}`}>
      {props.backIcon ? (
        <div className="back-button">
          <img
            className="vector-2"
            alt="Vector"
            src="https://c.animaapp.com/GmpRJdJZ/img/vector-7@2x.png"
          />
        </div>
      ) : null}

      <div className="page-title">{props.pageTitle}</div>

      {props.writeIcon ? (
        <img
          className="write-post-button"
          alt="Write post button"
          src="https://c.animaapp.com/GmpRJdJZ/img/writepostbutton-1@2x.png"
          onClick={handleWriteClick}  // Write 클릭 시 handleWriteClick 호출
        />
      ) : null}
    </div>
  );
};
