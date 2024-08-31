/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const TravelComponent = ({ className, props }) => {

  return (
    <div className={`travel-component ${className}`}>
      <div className="travel-title">
        <p className="p">
            <span className="text-title">
              {props.title}
            </span>
          </p>
        <div className="text-wrapper">{props.title}</div>
      </div>
      <div className="travel-content">
        <div className="content">
          <div className="location">
            <div className="div">
              <div className="vector-stroke">
                <img
                  className="img"
                  alt="Vector stroke"
                  src="https://c.animaapp.com/WAIsCMBj/img/vector--stroke--9@2x.png"
                />
                <img
                  className="vector-stroke"
                  alt="Vector stroke"
                  src="https://c.animaapp.com/WAIsCMBj/img/vector--stroke--10@2x.png"
                />
              </div>
              <div className="text-wrapper-2">{props.place}</div>
            </div>
          </div>
          <div className="calender">
            <div className="calendar">
              <div className="overlap-group">
                <img
                  className="vector-stroke-2"
                  alt="Vector stroke"
                  src="https://c.animaapp.com/WAIsCMBj/img/vector--stroke--11@2x.png"
                />
                <img
                  className="vector-stroke-3"
                  alt="Vector stroke"
                  src="https://c.animaapp.com/WAIsCMBj/img/vector--stroke--12@2x.png"
                />
                <img
                  className="vector-stroke-4"
                  alt="Vector stroke"
                  src="https://c.animaapp.com/WAIsCMBj/img/vector--stroke--13@2x.png"
                />
                <img
                  className="vector-stroke-5"
                  alt="Vector stroke"
                  src="https://c.animaapp.com/WAIsCMBj/img/vector--stroke--14@2x.png"
                />
                <img
                  className="vector-stroke-6"
                  alt="Vector stroke"
                  src="https://c.animaapp.com/WAIsCMBj/img/vector--stroke--15@2x.png"
                />
                <img
                  className="vector-stroke-7"
                  alt="Vector stroke"
                  src="https://c.animaapp.com/WAIsCMBj/img/vector--stroke--17@2x.png"
                />
                <img
                  className="vector-stroke-8"
                  alt="Vector stroke"
                  src="https://c.animaapp.com/WAIsCMBj/img/vector--stroke--17@2x.png"
                />
              </div>
              <div className="text-wrapper-2">{props.depart_at}~{props.arrive_at}</div>
            </div>
          </div>
        </div>
        <div className="status" />
      </div>
    </div>
  );
};
