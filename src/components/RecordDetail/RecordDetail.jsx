import React from "react";
import "./style.css";

export const RecordDetail = ({ className, props }) => {

  const date = new Date(props.start_at);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;

  return (
    <div className={`record-detail ${className}`}>
      <div className="text-wrapper-record-detail">{timeString}</div>
      <div className="record-detail-box">
        <div className="overlap-group">
          <img
            className="options-vertical"
            alt="Options vertical"
            src="https://c.animaapp.com/5E9hUrrU/img/optionsverticalicons-1@2x.png"
          />
          
          <div className="text-wrapper-title-record-detail">{props.title}</div>
          <div className="text-wrapper-thema-record-detail">{props.thema}</div>
          <div className="text-wrapper-plan-record-detail">{props.plan}</div>
          <p className="p">{props.detail_address}</p>
          <img className="vector" alt="Vector" src="https://c.animaapp.com/5E9hUrrU/img/vector-1@2x.png" />
          <div className="text-wrapper-map-record-detail">View in Map</div>
        </div>
      </div>
    </div>
  );
};
