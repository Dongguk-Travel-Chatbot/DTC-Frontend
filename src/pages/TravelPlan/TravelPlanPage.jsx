import React, { useEffect, useState } from "react";
import { ReactIconsFi } from "../../components/ReactIconsFi";
import { TravelPlan } from "../../components/TravelPlan";
import "./style.css";
import { instance } from "src/apis/axios";
import {useNavigate} from 'react-router-dom'
import { Footer } from "src/components/Footer";

export const TravelPlanPage = () => {
  let [plans, setPlans] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    instance
      .get("/api/mypage/plan", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        setPlans(response.data.data.records);
      })
      .catch((error) => {
        console.error("Error exchanging code:", error);
      });
  }, []);

  return (
    <div className="travel-plan-screen">
      <ReactIconsFi
        className="more-info-icons"
        reactIconsFi="https://c.animaapp.com/x2g7jTEH/img/-moreinfoicons@2x.png"
      />

      {
        plans.map(function(plan, i) {
          return <TravelPlan className="travel-plan-instance" props={plan} key={i}/>
        })
      }
      <div className="travel-status">
        <div className="text-wrapper-4" onClick={()=>{navigate('/travel-record')}}>여행기록</div>
        <div className="travel-plan-2">
          <div className="text-wrapper-5">여행계획</div>
          <div className="travel-plan-3" />
        </div>
      </div>

      <Footer className="footer-instance" overlapGroupClassName="design-component-instance-node" />
    </div>
  );
};
