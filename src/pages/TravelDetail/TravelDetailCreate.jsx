import React, { useEffect, useState } from "react";
import { RecordDetail } from "../../components/RecordDetail";
import "./style.css";
import { instance } from "src/apis/axios";
import { PageHeader } from "src/components/PageHeader";
import { useNavigate, useParams } from "react-router-dom";

export const TravelDetailCreate = () => {
  const [date, setDate] = useState(1);
  const [dates, setDates] = useState([]);
  const [travel, setTravel] = useState({});
  const [travelDetails, setTravelDetails] = useState([]);
  const [travelTitle, setTravelTitle] = useState("");
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const { travelId } = useParams();
  const navigate = useNavigate();

  let headerOption = {
    pageTitle: "나만의 여행 만들기",
    backIcon: true,
    writeIcon: false
  };

  const requestData = {
    title: travelTitle
  };

  const patchTravelTitle = async (travelId) => {
    try {
      const response = await instance.patch(`/api/mypage/${travelId}`, requestData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === 201) {
        console.log("여행기록 만들기 성공:", response.data);
        navigate("/main");
      } else {
        console.error("여행기록 만들기 실패:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchData = async (travelId, day) => {
    if(day != -1) {
      try {
        const response = await instance.get(`/api/mypage/${travelId}`, {
          params: {
            day: day,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        
        // 응답이 올 때까지 기다린 후 데이터 설정
        const { dates, travel, travel_details } = response.data.data;
        setDate(dates.day_int)
        setDates(dates);
        setTravel(travel);
        setTravelDetails(travel_details);
        
        setLoading(false); // 데이터 로드가 완료되면 로딩 상태를 false로 변경
      } catch (error) {
        console.error("게시물을 가져오는 중 오류 발생:", error);
        setLoading(false);
      }
    } 
  };

  useEffect(() => {
    fetchData(travelId, date);
  }, [date]);

  if (loading) {
    return <div></div>; // 로딩 중일 때 보여줄 화면
  }

  return (
    <div className="travel-detail">
      <PageHeader className="page-header-instance" props={headerOption} />
      
      <div className="day" onClick={() => fetchData(travelId, dates[0].day_int)}>
        <div className="text-wrapper-14">{dates[0].dday}</div>
        <div className="text-wrapper-8">{dates[0].day}</div>
        <div className="text-wrapper-9">{dates[0].date}</div>
      </div>
      <div className="day-2" onClick={() => fetchData(travelId, dates[1].day_int)}>
        <div className="text-wrapper-14">{dates[1].dday}</div>
        <div className="text-wrapper-8">{dates[1].day}</div>
        <div className="text-wrapper-11">{dates[1].date}</div>
      </div>
      <div className="day-3" onClick={() => fetchData(travelId, dates[2].day_int)}>
        <div className="text-wrapper-14">{dates[2].dday}</div>
        <div className="text-wrapper-8">{dates[2].day}</div>
        <div className="text-wrapper-11">{dates[2].date}</div>
      </div>
      <div className="day-4" onClick={() => fetchData(travelId, dates[3].day_int)}>
        <div className="overlap-3">
        <div className="text-wrapper-13">{dates[3].day}</div>
          <div className="text-wrapper-12">{dates[3].date}</div>
        </div>
        <div className="text-wrapper-14">{dates[3].dday}</div>
        <div className="day-rectangle" />
      </div>
      <div className="day-5" onClick={() => fetchData(travelId, dates[4].day_int)}>
        <div className="text-wrapper-14">{dates[4].dday}</div>
        <div className="text-wrapper-8">{dates[4].day}</div>
        <div className="text-wrapper-11">{dates[4].date}</div>
      </div>
      <div className="day-6" onClick={() => fetchData(travelId, dates[5].day_int)}>
        <div className="text-wrapper-14">{dates[5].dday}</div>
        <div className="text-wrapper-8">{dates[5].day}</div>
        <div className="text-wrapper-11">{dates[5].date}</div>
      </div>
      <div className="day-7" onClick={() => fetchData(travelId, dates[6].day_int)}>
        <div className="text-wrapper-14">{dates[6].dday}</div>
        <div className="text-wrapper-15">{dates[6].day}</div>
        <div className="text-wrapper-11">{dates[6].date}</div>
      </div>

      <div className="travel-write-bar">
        <div className="div-wrapper">
          <input className="text-wrapper-16" placeholder="제목을 입력하고 여행을 저장하세요 !" onChange={(e)=>{setTravelTitle(e.target.value)}}></input>
        </div>
        <div className="title-write-icons">
          <img className="group-write" alt="Group write" src="https://c.animaapp.com/5E9hUrrU/img/groupwrite@2x.png" onClick={()=>{patchTravelTitle(travelId)}}/>
        </div>
      </div>
      <img className="line" alt="Line" src="https://c.animaapp.com/5E9hUrrU/img/line-5@2x.png" />

      <div className="text-wrapper-5">시간</div>
      <div className="text-wrapper-6">장소</div>
      <div className="date">
          <img
            className="calendar-icons"
            alt="Calendar icons"
            src="https://c.animaapp.com/5E9hUrrU/img/calendaricons@2x.png"
          />
          <div className="text-wrapper-7">{travel.depart_at} ~ {travel.arrive_at}</div>
        </div>

      <div className="line-divide-time-and" />

      <div className="overlap">
        <div className="overlap-2">
          {
            travelDetails.map(function(travel, i) {
             return <RecordDetail className="record-detail-instance" props={travel} key={i}/>
            })
          }
        </div>
      </div>

    </div>
  );
};
