import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const PageHeader = ({ className, props }) => {
  const navigate = useNavigate();

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
          onClick={()=>{navigate(props.writeUrl)}}
        />
      ) : null}
    </div>
  );
};
