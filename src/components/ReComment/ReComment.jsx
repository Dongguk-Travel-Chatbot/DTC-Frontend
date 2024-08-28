/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const ReComment = ({ className }) => {
  return (
    <div className={`re-comment ${className}`}>
      <div className="re-comment-info">
        <img className="like-icon-2" alt="Like icon" src="https://c.animaapp.com/CeWmk5Rx/img/like-icon-5@2x.png" />
        <div className="text-wrapper-11">12</div>
        <div className="text-wrapper-12">8/23</div>
        <div className="text-wrapper-13">10:49</div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <div className="text-wrapper-14">답글 달기</div>
          </div>
        </div>
      </div>
      <div className="re-comment-content">
        <div className="text-wrapper-15">음 아무말을 적기!!!</div>
      </div>
      <div className="re-comment-writer" />
      <div className="re-comment-writer-2">
        <div className="text-wrapper-16">익명2</div>
        <img
          className="re-edit-icons"
          alt="Re edit icons"
          src="https://c.animaapp.com/CeWmk5Rx/img/editicons-3@2x.png"
        />
        <div className="re-modify-button">
          <div className="overlap-group-3">
            <div className="text-wrapper-17">수정하기</div>
          </div>
        </div>
        <div className="re-delete-button">
          <div className="overlap-group-3">
            <div className="text-wrapper-17">삭제하기</div>
          </div>
        </div>
      </div>
    </div>
  );
};
