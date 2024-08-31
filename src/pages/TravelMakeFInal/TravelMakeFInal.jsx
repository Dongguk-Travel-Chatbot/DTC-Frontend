import React from "react";
import "./style.css";
import { PageHeader } from "src/components/PageHeader";
import { NextButton } from "src/components/NextButton";
import { useNavigate } from "react-router-dom";

export const TravelMakeFInal = () => {
  const navigate = useNavigate();

  let headerOption = {
    pageTitle: "",
    backIcon: true,
    writeIcon: false
  };

  return (
    <div className="travel-make-final">
      <PageHeader className="page-header-instance" props={headerOption} />

      <div className="text-wrapper-fin">Chatbot travel plan</div>
      <img className="image" alt="Image" src="https://c.animaapp.com/C2N7uvJ2/img/image-106@2x.png" />
      <p className="AI-AI">
        AI 챗봇 기능을 통해 사용자는 여행 목적지, 기간, <br />
        예산 등의 정보를 입력하면 AI가 최적의 여행 일정을 대화를 통해 제안해 드립니다.
      </p>
      <div className="dot">
        <div className="pagination-deactive" />
        <div className="div" />
        <div className="pagination-active" />
      </div>

      <NextButton className="next-button-instance" onClick={()=>{navigate("/aichat")}}/>
    </div>
  );
};
