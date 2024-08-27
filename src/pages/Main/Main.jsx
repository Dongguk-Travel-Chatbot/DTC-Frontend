import React from "react";
import { Footer } from "../../components/Footer";
import { HotPostInMain } from "../../components/HotPostInMain";
import ChatbotPlanButton from "src/assets/ChatbotPlanButton.svg";
import "./style.css";

export const Main = () => {
  return (
    <div className="main">
      <img
        className="chatbot-plan-button"
        alt="Chatbot plan button"
        src={ChatbotPlanButton}
      />
      <div className="main-plan-recommend">
        <div className="div-wrapper">
          <p className="p">5월달에 꼭 가야하는 여행지 추천</p>
        </div>
        <div className="text-wrapper-4"> 실시간 인기 여행지</div>
      </div>
      <HotPostInMain className="hot-post-in-main-instance" />
      <Footer className="footer-instance" overlapGroupClassName="design-component-instance-node" />
    </div>
  );
};
