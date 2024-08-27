import React, { useEffect, useState } from "react";
import { ReactIconsFi } from "../../components/ReactIconsFi";
import { TravelRecord } from "../../components/TravelRecord";
import "./style.css";
import { instance } from "src/apis/axios";

export const TravelRecordPage = () => {
  let [records, setRecords] = useState([]);

  useEffect(() => {
    instance
      .get("/api/mypage/record", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data.data.records);
        setRecords(response.data.data.records);
        console.log(records);
      })
      .catch((error) => {
        console.error("Error exchanging code:", error);
      });
  }, []);

  return (
    <div className="travel-record-screen">
      {
        records.map(function(record, i) {
          return <TravelRecord className="travel-record-instance" props={record} key={i}/>
        })
      }
      <div className="travel-status">
        <div className="travel-record-2">
          <div className="text-wrapper-4">여행기록</div>
          <div className="travel-record-3" />
        </div>
        <div className="text-wrapper-5">여행계획</div>
      </div>
      <ReactIconsFi
        className="more-info-icons"
        reactIconsFi="https://c.animaapp.com/x2g7jTEH/img/-moreinfoicons@2x.png"
      />
    </div>
  );
};
