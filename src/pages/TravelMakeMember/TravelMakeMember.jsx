import React from "react";
import "./style.css";
import { PageHeader } from "src/components/PageHeader";
import { NextButton } from "src/components/NextButton";

export const TravelMakeMember = () => {

  let headerOption = {
    pageTitle: "",
    backIcon: true,
    writeIcon: false
  };

  return (
    <div className="travel-make-member">
      <PageHeader className="page-header-instance" props={headerOption} />

      <div className="date-rectangle-group">
        <div className="overlap-group">
          <div className="text-wrapper-mem">날짜</div>
          <p className="div">10월 23일 ~ 10월 25일</p>
        </div>
      </div>
      <div className="adult-selector">
        <img
          className="line-separate-human"
          alt="Line separate human"
          src="https://c.animaapp.com/ePuwurhV/img/lineseparatehuman-3@2x.png"
        />
        <div className="text-wrapper-2">성인</div>
        <div className="div-2">13세 이상</div>
        <div className="amount">
          <img className="img" alt="Icons minus" src="https://c.animaapp.com/ePuwurhV/img/icons-minus-3@2x.png" />
          <div className="adult-number">
            <div className="text-wrapper-4">0</div>
          </div>
          <img className="img" alt="Icons plus" src="https://c.animaapp.com/ePuwurhV/img/icons-plus-3@2x.png" />
        </div>
      </div>
      <div className="adult-selector-2">
        <img
          className="line-separate-human"
          alt="Line separate human"
          src="https://c.animaapp.com/ePuwurhV/img/lineseparatehuman-3@2x.png"
        />
        <div className="text-wrapper-2">어린이</div>
        <div className="div-2">2 ~ 12세</div>
        <div className="amount">
          <img className="img" alt="Icons minus" src="https://c.animaapp.com/ePuwurhV/img/icons-minus-3@2x.png" />
          <div className="adult-number">
            <div className="text-wrapper-4">0</div>
          </div>
          <img className="img" alt="Icons plus" src="https://c.animaapp.com/ePuwurhV/img/icons-plus-3@2x.png" />
        </div>
      </div>
      <div className="adult-selector-3">
        <img
          className="line-separate-human"
          alt="Line separate human"
          src="https://c.animaapp.com/ePuwurhV/img/lineseparatehuman-3@2x.png"
        />
        <div className="text-wrapper-2">유아</div>
        <div className="div-2">2세 미만</div>
        <div className="amount">
          <img className="img" alt="Icons minus" src="https://c.animaapp.com/ePuwurhV/img/icons-minus-3@2x.png" />
          <div className="adult-number">
            <div className="text-wrapper-4">0</div>
          </div>
          <img className="img" alt="Icons plus" src="https://c.animaapp.com/ePuwurhV/img/icons-plus-3@2x.png" />
        </div>
      </div>
      <div className="adult-selector-4">
        <img
          className="line-separate-human"
          alt="Line separate human"
          src="https://c.animaapp.com/ePuwurhV/img/lineseparatehuman-3@2x.png"
        />
        <div className="text-wrapper-2">반려동물</div>
        <div className="text-wrapper-5">반려동물과 동반하시나요?</div>
        <div className="amount">
          <img className="img" alt="Icons minus" src="https://c.animaapp.com/ePuwurhV/img/icons-minus-3@2x.png" />
          <div className="adult-number">
            <div className="text-wrapper-4">0</div>
          </div>
          <img className="img" alt="Icons plus" src="https://c.animaapp.com/ePuwurhV/img/icons-plus-3@2x.png" />
        </div>
      </div>
      <div className="dot">
        <div className="pagination-active" />
        <div className="pagination-deactive" />
        <div className="pagination-deactive-2" />
      </div>
      <div className="text-wrapper-6">누구와 함께 가나요?</div>

      <NextButton className="next-button-instance" />
    </div>
  );
};
