import React from "react";
import "./style.css";
import { Footer } from "src/components/Footer";

export const Mypage = () => {
  return (
    <div className="mypage">
      <div className="overlap">
        <img
          className="my-page-rectangle"
          alt="My page rectangle"
          src="https://c.animaapp.com/sccbCaCP/img/mypagerectangle@2x.png"
        />
        <img className="image" alt="Image" src="https://c.animaapp.com/sccbCaCP/img/image-98@2x.png" />
        <div className="my-page-edit-icons">
          <img
            className="my-page-edit"
            alt="My page edit"
            src="https://c.animaapp.com/sccbCaCP/img/mypageedit@2x.png"
          />
        </div>
      </div>
      <div className="my-post-button">
        <div className="overlap-group">
          <div className="text-wrapper">My Posts</div>
        </div>
      </div>
      <div className="my-trip-button">
        <div className="overlap-group">
          <div className="div">My Trips</div>
        </div>
      </div>
      <div className="scrap-button">
        <div className="overlap-group">
          <div className="text-wrapper-2">Other’s Trips</div>
        </div>
      </div>
      <div className="text-wrapper-3">바니바니</div>
      <p className="p">23 / 남성 / INFJ</p>
      <Footer className="footer-instance" overlapGroupClassName="design-component-instance-node" />
    </div>
  );
};
