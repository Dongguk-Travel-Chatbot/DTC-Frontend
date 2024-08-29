import React from "react";
import "./style.css";
import { ChatAi } from "../../components/ChatAi";
import { ChatUser } from "../../components/ChatUser";
import { PageHeader } from "src/components/PageHeader";

export const ChatAiTravel = () => {

  let headerOption = {
    pageTitle : "",
    backIcon : true,
    writeIcon : false
  }

  return (
    <div className="chat-AI-travel">
      <PageHeader className="page-header-instance" props={headerOption}/>

      <div className="overlap">
        <div className="text-wrapper">Chatbot travel plan</div>
        <img className="image" alt="Image" src="https://c.animaapp.com/wRSaELis/img/image-106@2x.png" />
        <ChatAi className="chat-AI-instance" />
        <ChatUser className="chat-user-instance" />
      </div>
      
      <div className="chat-input-box">
        <div className="chat-group">
          <div className="overlap-group">
            <div className="div">글을 입력하시오.</div>
          </div>
        </div>
        <img className="vector" alt="Vector" src="https://c.animaapp.com/wRSaELis/img/vector@2x.png" />
      </div>
    </div>
  );
};
