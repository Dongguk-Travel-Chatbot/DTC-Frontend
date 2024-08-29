import React, { useEffect, useState } from "react";
import { TravelComponent } from "../../components/TravelComponent";
import { PageHeader } from "../../components/PageHeader";
import { useNavigate } from "react-router-dom";
import { instance } from "src/apis/axios";
import "./style.css";

export const TravelClip = () => {
  const [travelComponent, setTravelComponent] = useState([]);
  const [selectRecord, setSelectRecord] = useState(null); // 변경: 초기값을 null로 설정
  const navigate = useNavigate();
  const headerOption = {
    pageTitle: "글쓰기",
    backIcon: true,
    writeIcon: false,
  };

  useEffect(() => {
    instance
      .get("/api/mypage/record", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setTravelComponent(response.data.data.records);
      })
      .catch((error) => {
        console.error("Error exchanging code:", error);
      });
  }, []);

  const handleClick = (index) => {
    setSelectRecord(index); // 클릭된 컴포넌트의 인덱스를 상태로 저장
  };

  const handleDoubleClick = (record, e) => {
    e.stopPropagation();
    // 선택한 기록을 상태로 전달
    navigate("/travel-post", { state: { selectedRecord: record } });
  };

  return (
    <div className="travel-clip">
      <PageHeader className="page-header-instance" props={headerOption} />
      {travelComponent.map((eachRecord, i) => (
        <div
          key={i}
          className="travel-component-wrapper"
          onClick={() => handleClick(i)} // 클릭 시 상태 업데이트
          onDoubleClick={(e) => handleDoubleClick(eachRecord, e)}
          style={{ cursor: 'pointer' }}
        >
          <TravelComponent
            className={i === selectRecord ? "click-record" : ""}
            alt="component"
            props={eachRecord}
          />
        </div>
      ))}
    </div>
  );
};
