import React, { useState } from "react";
import CalendarComponent from "react-calendar";
import styled from "styled-components"; // styled-components 사용
import 'react-calendar/dist/Calendar.css';
import moment from "moment";

// Calendar 스타일 정의
const StyledCalendarWrapper = styled.div`
  .react-calendar {
    border: none;
    height: 403px;
  }
  .react-calendar__navigation__next-button,
  .react-calendar__navigation__next2-button,
  .react-calendar__navigation__prev-button,
  .react-calendar__navigation__prev2-button {
    font-size: 24px; /* 폰트 크기 변경 */
    color: ${({ theme }) => theme.color.brown};
    gap:5px;
  }
  
  .react-calendar__navigation {
    background: ${({ theme }) => theme.color.white};
    border-bottom: 4px solid ${({ theme }) => theme.color.brown};
    height: 80px;
    border-radius: 20px 20px 0 0;
    border: 0;
    span {
      font-size: 21px;
      font-weight: 600;
      color: ${({ theme }) => theme.color.brown};
    }
  }

  .react-calendar__navigation button:disabled {
    background-color: ${({ theme }) => theme.color.pink};
    border-radius: 20px 20px 20px 20px;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 20px;
  }

  .react-calendar__tile--now {
    background: ${({ theme }) => theme.color.pink};
    color: white;
  }

  .react-calendar__tile--active,
  .react-calendar__tile--range {
    background: ${({ theme }) => theme.color.blue};
    border-radius: 50px;
    height: 40px;
    color: white;
  }

  .react-calendar__month-view {
    padding: 12px 32px;
    abbr {
      color: ${({ theme }) => theme.color.brown};
      font-size: 16px;
      font-weight: 500;
    }
    border-radius: 50px;
    height: 40px;
  }

  .react-calendar__month-view__weekdays {
    abbr {
      font-size: 14px;
      font-weight: 900;
    }
  }

  .react-calendar__tile {
    text-align: center;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background: ${({ theme }) => theme.color.blue};
    border-radius: 50px;
    height: 40px;
  }

  .react-calendar__tile--now {
    background: ${({ theme }) => theme.color.lime};
    border-radius: 50px;
    height: 40px;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: ${({ theme }) => theme.color.blue};
    border-radius: 50px;
    height: 40px;
  }
`;

export const Calendar = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState(null); // 선택된 날짜 상태
  const [startDate, setStartDate] = useState(null); // 첫 번째 클릭한 날짜 (첫 날)
  const [endDate, setEndDate] = useState(null); // 두 번째 클릭한 날짜 (마지막 날)
  const [tempDate, setTempDate] = useState(null);

  const handleDateChange = (date) => {
    if (!tempDate) {
      setTempDate(date); // 첫 날 저장
    } else if (!startDate) {
      if (tempDate > date) {
        setStartDate(date);
        setEndDate(tempDate);
        onChange(date, tempDate);
      } else {
        setStartDate(tempDate);
        setEndDate(date);
        onChange(tempDate, date);
      }
    } else {
      setStartDate(null);
      setEndDate(null); // 첫 날을 다시 클릭하면 마지막 날 리셋
      setTempDate(date);
    }

    setSelectedDate(date); // 선택된 날짜를 업데이트
  };

  // 날짜 비교 함수 (같은 날짜인지 확인)
  const isSameDay = (day1, day2) => {
    return moment(day1).isSame(day2, 'day');
  };

  // 날짜가 startDate와 endDate 사이에 있는지 확인하는 함수
  const isInRange = (date, startDate, endDate) => {
    if (startDate && endDate) {
      return moment(date).isBetween(startDate, endDate, 'day', '[]'); // []는 경계 포함
    }
    return false;
  };

  return (
    <StyledCalendarWrapper>
      <CalendarComponent
        onChange={handleDateChange}
        value={selectedDate}
        locale="en"
        formatDay={(locale, date) => moment(date).format("DD")}
        showNeighboringMonth={false}
        tileClassName={({ date, view }) => {
          if (startDate && isSameDay(date, startDate)) {
            return 'react-calendar__tile--active'; // 시작 날짜에 스타일 적용
          }
          if (endDate && isSameDay(date, endDate)) {
            return 'react-calendar__tile--active'; // 끝 날짜에 스타일 적용
          }
          if (isInRange(date, startDate, endDate)) {
            return 'react-calendar__tile--active'; // 시작 날짜와 끝 날짜 사이의 날짜들에 스타일 적용
          }
          return null; // 스타일 없음
        }}
      />
    </StyledCalendarWrapper>
  );
};

export default Calendar;