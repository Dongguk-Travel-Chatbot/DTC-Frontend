import React, { useState } from "react";
import { Frame } from "../../components/Frame";
import "./style.css";
import { PageHeader } from "src/components/PageHeader";
import { NextButton } from "src/components/NextButton";
import { useNavigate } from "react-router-dom";
import CustomCalendar from "src/components/Calendar/Calendar";
import { ThemeProvider } from "styled-components"; // styled-components의 ThemeProvider 사용
import { instance } from "src/apis/axios";

export const Travelmakecallender = () => {
  const [departDate, setDepartDate] = useState(null);
  const [arriveDate, setArriveDate] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  let headerOption = {
    pageTitle: "",
    backIcon: true,
    writeIcon: false,
  };

  const handleClick = async () => {
    if (!departDate || !arriveDate) {
      setErrorMessage("출발일과 도착일을 선택해주세요.");
      return;
    }

    try {
      const response = await instance.post(
        `/api/temp-place`,
        {
          depart_at: departDate.toISOString(), // Date 객체를 문자열로 변환
          arrive_at: arriveDate.toISOString(), // Date 객체를 문자열로 변환
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
            departDate: departDate.toLocaleDateString(), // 전달 시에도 문자열로 변환
            arriveDate: arriveDate.toLocaleDateString(), // 전달 시에도 문자열로 변환
          },
        });
      } else {
        setErrorMessage("여행 계획 생성에 실패했습니다. 다시 시도해 주세요.");
      }
    } catch (error) {
      setErrorMessage("오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (startDate, endDate) => {
    if (startDate && endDate) {
      setDepartDate(startDate);
      setArriveDate(endDate);
    } else {
      console.log("Date is null");
    }
  };

  const theme = {
    color: {
      pink: "#ff69b4",
      brown: "#8b4513",
      blue: "#04a4fa",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="travelmakecallender-wrapper">
        <PageHeader className="page-header-instance" props={headerOption} />

        <div className="text-wrapper-6">여행날짜는 언제인가요?</div>
        <div className="dot-3">
          <div className="pagination-active-3" />
          <div className="pagination-deactive-5" />
          <div className="pagination-deactive-6" />
        </div>

        <div className="callender-3">
          <CustomCalendar value={selectedDate} onChange={handleDateChange} />
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <NextButton className="next-button-instance" onClick={handleClick} />
      </div>
    </ThemeProvider>
  );
};