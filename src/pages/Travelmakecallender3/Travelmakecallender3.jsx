import React, { useState } from "react";
import { Frame } from "../../components/Frame";
import "./style.css";
import { PageHeader } from "src/components/PageHeader";
import { NextButton } from "src/components/NextButton";
import Arrows from "src/assets/Arrows.svg";
import SelectDate from "src/assets/SelectDate.svg";
import { useNavigate } from "react-router-dom";
import { instance } from "src/apis/axios";

export const Travelmakecallender3 = () => {
  const [departDate, setDepartDate] = useState("2024-09-19");
  const [arriveDate, setArriveDate] = useState("2024-09-21");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  let headerOption = {
    pageTitle: "",
    backIcon: true,
    writeIcon: false,
  };

  const handleClick = async () => {
    try {
      // POST 요청 보내기
      const response = await instance.post(
        `/api/temp-place`,
        {
          depart_at: departDate, // 실제 출발 날짜
          arrive_at: arriveDate, // 실제 도착 날짜
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 201) {
        console.log("Post 성공:", response.data);
        navigate("/travel-make-member", {
          state: {
            departDate: departDate,
            arriveDate: arriveDate,
          },
        }); // 특정 경로로 이동하면서 state에 데이터 전달
      } else {
        setErrorMessage("여행 계획 생성에 실패했습니다. 다시 시도해 주세요.");
      }
    } catch (error) {
      setErrorMessage("오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="travelmakecallender">
      <PageHeader className="page-header-instance" props={headerOption} />

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="text-wrapper-cal1">여행날짜는 언제인가요?</div>
      <div className="month-selector">
        <div className="div">September 2024</div>
      </div>
      <img className="arrows" alt="Arrows" src={Arrows} />
      <div className="overlap-group">
        <div className="callender">
          <div className="frame-2">
            <div className="div-wrapper">
              <div className="text-wrapper-2">SU</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-2">Mo</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-2">Tu</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-2">We</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-2">Th</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-2">Fr</div>
            </div>
            <div className="frame-3">
              <div className="text-wrapper-2">Sa</div>
            </div>
          </div>
          <div className="frame-4">
            <Frame className="frame-119" text="1" />
            <Frame className="frame-119" text="2" />
            <Frame className="frame-119" text="3" />
            <Frame className="frame-119" text="4" />
            <Frame className="frame-119" text="5" />
            <Frame className="frame-119" text="6" />
            <Frame className="frame-119" text="7" />
          </div>
          <div className="frame-4">
            <Frame className="frame-119" text="8" />
            <Frame className="frame-119" text="9" />
            <Frame className="frame-119" text="10" />
            <Frame className="frame-119" text="11" />
            <Frame className="frame-119" text="12" />
            <Frame className="frame-119" text="13" />
            <Frame className="frame-119" text="14" />
          </div>
          <div className="frame-4">
            <Frame className="frame-119" text="15" />
            <Frame className="frame-119" text="16" />
            <Frame className="frame-119" text="17" />
            <Frame className="frame-119" text="18" />
            <Frame className="frame-119" text="19" />
            <Frame className="frame-119" text="20" />
            <Frame className="frame-119" text="21" />
          </div>
          <div className="frame-4">
            <Frame className="frame-119" text="22" />
            <Frame className="frame-119" text="23" />
            <Frame className="frame-119" text="24" />
            <Frame className="frame-119" text="25" />
            <Frame className="frame-119" text="26" />
            <Frame className="frame-119" text="27" />
            <Frame className="frame-119" text="28" />
          </div>
          <div className="frame-4">
            <Frame className="frame-119" text="29" />
            <Frame className="frame-119" text="30" />
          </div>
          <div className="frame-4">

            <div className="frame-6">
              <div className="div-wrapper">
                <div className="SU-2">{""}</div>
              </div>
            </div>
            <div className="frame-7">
              <div className="div-wrapper">
                <div className="SU-2">{""}</div>
              </div>
            </div>
          </div>
        </div>
        <img className="select-button" alt="Select button" src={SelectDate} />
        <img className="img" alt="Select button" src={SelectDate} />
        <img className="select-button-2" alt="Select button" src={SelectDate} />
      </div>
      <div className="dot">
        <div className="pagination-active" />
        <div className="pagination-deactive" />
        <div className="pagination-deactive-2" />
      </div>

      <NextButton className="next-button-instance" onClick={handleClick} />
    </div>
  );
};
