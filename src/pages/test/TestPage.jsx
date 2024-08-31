import React from "react";
import "./style.css";
import { KakaoMap } from "src/components/KakaoMap";

export const TestPage = () => {
  return (
    <div className="test">
      <KakaoMap latitude={37.5665} longitude={126.9780} />
    </div>
  );
};
