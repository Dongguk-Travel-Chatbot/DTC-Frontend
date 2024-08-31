import React, { useState } from "react";
import "./style.css";
import { PageHeader } from "src/components/PageHeader";
import { NextButton } from "src/components/NextButton";
import { instance } from "src/apis/axios";
import { useNavigate } from "react-router-dom"; // useNavigate 추가

export const TravelMakeMember = () => {
  const [adultNum, setAdult] = useState(0);
  const [kidNum, setKid] = useState(0);
  const [kindergardenNum, setKindergarden] = useState(0);
  const [animalNum, setAnimal] = useState(0);
  const [totalNum, setTotal] = useState(0);

  const navigate = useNavigate(); // useNavigate 훅 사용

  let headerOption = {
    pageTitle: "",
    backIcon: true,
    writeIcon: false,
  };

  const increment = (setter, value) => {
    setter(value + 1);
  };
  const decrement = (setter, value) => {
    setter(Math.max(0, value - 1)); // 0 이하로 내려가지 않게 하기
  };

  const countAndNext = async () => {
    const total = adultNum + kidNum + kindergardenNum + animalNum;
    setTotal(total);
    console.log(total);

    try {
      const response = await instance.patch("/api/temp-place", null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {  // 쿼리 스트링으로 전달
          person: total,  // 'person' 파라미터로 총 인원 수를 전송
        },
      });

      if (response.status === 200 || response.status === 201) {
        console.log("총 인원수 업데이트 성공:", response.data);
        navigate("/travel-make-final");
      } else {
        console.error("총 인원수 업데이트 실패:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      }
    }
  };

  return (
    <div className="travel-make-member">
      <PageHeader className="page-header-instance" props={headerOption} />

      <div className="date-rectangle-group">
        <div className="overlap-group">
          <div className="text-wrapper-mem">날짜</div>
          <p className="div">10월 16일 ~ 10월 18일</p>
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
          <img
            className="img"
            alt="Icons minus"
            src="https://c.animaapp.com/ePuwurhV/img/icons-minus-3@2x.png"
            onClick={() => decrement(setAdult, adultNum)}
          />
          <div className="adult-number">
            <div className="text-wrapper-4">{adultNum}</div>
          </div>
          <img
            className="img"
            alt="Icons plus"
            src="https://c.animaapp.com/ePuwurhV/img/icons-plus-3@2x.png"
            onClick={() => increment(setAdult, adultNum)}
          />
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
          <img
            className="img"
            alt="Icons minus"
            src="https://c.animaapp.com/ePuwurhV/img/icons-minus-3@2x.png"
            onClick={() => decrement(setKid, kidNum)}
          />
          <div className="adult-number">
            <div className="text-wrapper-4">{kidNum}</div>
          </div>
          <img
            className="img"
            alt="Icons plus"
            src="https://c.animaapp.com/ePuwurhV/img/icons-plus-3@2x.png"
            onClick={() => increment(setKid, kidNum)}
          />
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
          <img
            className="img"
            alt="Icons minus"
            src="https://c.animaapp.com/ePuwurhV/img/icons-minus-3@2x.png"
            onClick={() => decrement(setKindergarden, kindergardenNum)}
          />
          <div className="adult-number">
            <div className="text-wrapper-4">{kindergardenNum}</div>
          </div>
          <img
            className="img"
            alt="Icons plus"
            src="https://c.animaapp.com/ePuwurhV/img/icons-plus-3@2x.png"
            onClick={() => increment(setKindergarden, kindergardenNum)}
          />
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
          <img
            className="img"
            alt="Icons minus"
            src="https://c.animaapp.com/ePuwurhV/img/icons-minus-3@2x.png"
            onClick={() => decrement(setAnimal, animalNum)}
          />
          <div className="adult-number">
            <div className="text-wrapper-4">{animalNum}</div>
          </div>
          <img
            className="img"
            alt="Icons plus"
            src="https://c.animaapp.com/ePuwurhV/img/icons-plus-3@2x.png"
            onClick={() => increment(setAnimal, animalNum)}
          />
        </div>
      </div>
      <div className="dot">
        <div className="pagination-active" />
        <div className="pagination-deactive" />
        <div className="pagination-deactive-2" />
      </div>
      <div className="text-wrapper-6">누구와 함께 가나요?</div>

      <NextButton className="next-button-instance" onClick={countAndNext} />
    </div>
  );
};