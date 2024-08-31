import React from "react";
import { Footer } from "../../components/Footer";
import { HotPostInMain } from "../../components/HotPostInMain";
import ChatbotPlanButton from "src/assets/ChatbotPlanButton.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const Main = () => {

  const navigate = useNavigate();

  return (
    <div className="main">
      <img
        className="chatbot-plan-button"
        alt="Chatbot plan button"
        src={ChatbotPlanButton}
        onClick={() => navigate("/travel-make-basic")}
      />
      <div className="main-plan-recommend">
        <div className="div-wrapper">
          <p className="p">핫한 여행지 Top Picks</p>
        </div>
        <div className="text-wrapper-4"> 실시간 인기 여행지</div>
      </div>
      <HotPostInMain className="hot-post-in-main-instance" />
      <Footer className="footer-instance" overlapGroupClassName="design-component-instance-node" />
    </div>
  );
};
