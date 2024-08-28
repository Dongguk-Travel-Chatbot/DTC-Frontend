/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const CommentMono = ({ className }) => {
  return (
    <div className={`comment-mono ${className}`}>
      <div className="comment-content">
        <div className="text-wrapper-4">
          가나다라마바사 아자차카타파하
          <br />
          안녕하새용용용가리용용
          <br />
          용가리 반찬
        </div>
      </div>
      <div className="comment-writer-icons" />
      <div className="comment-info">
        <img className="like-icon" alt="Like icon" src="https://c.animaapp.com/CeWmk5Rx/img/like-icon-5@2x.png" />
        <div className="text-wrapper-5">21</div>
        <div className="text-wrapper-6">8/21</div>
        <div className="text-wrapper-7">11:21</div>
        <div className="re-comment-button">
          <div className="overlap-group">
            <div className="text-wrapper-8">답글 달기</div>
          </div>
        </div>
      </div>
      <div className="comment-writer">
        <div className="text-wrapper-9">익명1</div>
        <img className="edit-icons" alt="Edit icons" src="https://c.animaapp.com/CeWmk5Rx/img/editicons-3@2x.png" />
        <div className="modify-button">
          <div className="div-wrapper">
            <div className="text-wrapper-10">수정하기</div>
          </div>
        </div>
        <div className="delete-button">
          <div className="div-wrapper">
            <div className="text-wrapper-10">삭제하기</div>
          </div>
        </div>
      </div>
    </div>
  );
};
