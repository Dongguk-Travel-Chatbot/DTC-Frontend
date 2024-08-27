import React from "react";
import { TravelComponent } from "../../components/TravelComponent";
import "./style.css";

export const TravelClip = () => {
  return (
    <div className="travel-clip">
      <TravelComponent className="travel-component-instance" />
    </div>
  );
};
