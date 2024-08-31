import React from "react";
import "./style.css";
import TravelMakeBasicImage from "src/assets/TravelMakeBasicImage.svg"
import { PageHeader } from "src/components/PageHeader";
import { NextButton } from "src/components/NextButton";

export const TravelMakeBasic = () => {
  
  let headerOption = {
    pageTitle: "",
    backIcon: true,
    writeIcon: false
  };

  return (
    <div className="travel-make-basic">
      <PageHeader className="page-header-instance" props={headerOption} />

      <img className="img" alt="Travel make basic" src={TravelMakeBasicImage} />
      <div className="text-wrapper-travel">기본 정보를 입력해주세요.</div>
      <p className="div">
        여행날짜와 동반인원과 관련하여 <br />
        여행의 기본정보를 입력해주세요.
      </p>

      <NextButton className="next-button-instance" />
    </div>
  );
};
