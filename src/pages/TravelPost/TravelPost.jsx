import React from "react";
import "./style.css";
import { PageHeader } from "src/components/PageHeader";

export const TravelPost = () => {
  let headerOption = {
    pageTitle : "글쓰기",
    backIcon : true,
    writeIcon : true,
  }

  return (
    <div className="travel-post">
      <PageHeader className="page-header-instance" props={headerOption}/>
      <div className="post-write">
        <input className="menu" defaultValue="제목"></input>
        <textarea className="text-wrapper" defaultValue="내용을 입력하세요."></textarea>
        <img className="line" alt="Line" src="https://c.animaapp.com/q591QOCC/img/line-5@2x.png" />
      </div>
      <div className="clip-travel">
        <img className="img" alt="Clip travel" src="https://c.animaapp.com/q591QOCC/img/cliptravel@2x.png" />
      </div>
    </div>
  );
};
