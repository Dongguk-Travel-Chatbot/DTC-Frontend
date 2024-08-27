import React from "react";
import { useNavigate } from "react-router-dom";  // useNavigate 훅을 import
import Home from "src/assets/Home.svg";
import Chat from "src/assets/Chat.svg";
import Community from "src/assets/Community.svg";
import Mypage from "src/assets/Mypage.svg";
import "./style.css";

export const Footer = ({ className, overlapGroupClassName }) => {
  const navigate = useNavigate();  // useNavigate 훅을 사용하여 navigate 함수 생성

  return (
    <div className={`footer ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className="footer-rectangle" />

        {/* 각 div에 onClick 이벤트를 추가 */}
        <div className="home" onClick={() => navigate("/main")}>
          <img className="icons-home" alt="Icons home" src={Home} />
        </div>

        <div className="chat" onClick={() => navigate("/chat")}>
          <img className="icons-chat" alt="Icons chat" src={Chat} />
        </div>

        <div className="community" onClick={() => navigate("/community")}>
          <img className="icons-community" alt="Icons community" src={Community} />
        </div>

        <div className="user" onClick={() => navigate("/mypage")}>
          <div className="icons-user">
            <img className="img" alt="Icons user" src={Mypage} />
          </div>
        </div>
      </div>
    </div>
  );
};
