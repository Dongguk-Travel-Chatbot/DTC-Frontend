import React from "react";
import { PageHeader } from "../../components/PageHeader";
import "./style.css";
import { Footer } from "src/components/Footer";

export const Community = () => {

  let headerOption = {
    pageTitle : "커뮤니티",
    backIcon : true,
    writeIcon : false
  }

  return (
    <div className="community">
      <PageHeader className="page-header-instance" props={headerOption}/>

      <div className="hot-community-button">
        <div className="card">
          <img className="button" alt="Button" src="https://c.animaapp.com/ZxwOpDDx/img/button-2@2x.png" />
          <div className="menu">
            <div className="text-wrapper">인기게시판</div>
            <div className="description">자유로운 주제로 대화하세요!</div>
          </div>
          <img className="icon" alt="Icon" src="https://c.animaapp.com/ZxwOpDDx/img/icon-2@2x.png" />
        </div>
      </div>

      <div className="travel-community">
        <div className="card">
          <img className="button" alt="Button" src="https://c.animaapp.com/ZxwOpDDx/img/button-2@2x.png" />
          <div className="menu">
            <div className="text-wrapper">여행게시판</div>
            <div className="description">여행 정보와 후기를 공유하세요!</div>
          </div>
          <img className="icon" alt="Icon" src="https://c.animaapp.com/ZxwOpDDx/img/icon-2@2x.png" />
        </div>
      </div>

      <div className="free-community">
        <div className="card">
          <img className="button" alt="Button" src="https://c.animaapp.com/ZxwOpDDx/img/button-2@2x.png" />
          <div className="menu">
            <div className="text-wrapper">자유게시판</div>
            <div className="description">즉석 여행 친구를 찾아보세요!</div>
          </div>
          <img className="icon" alt="Icon" src="https://c.animaapp.com/ZxwOpDDx/img/icon-2@2x.png" />
        </div>
      </div>
      
      <Footer className="footer-instance" overlapGroupClassName="design-component-instance-node" />
    </div>
  );
};
