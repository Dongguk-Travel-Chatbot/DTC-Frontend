/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import ProfileDogCircle from "src/assets/ProfileDogCircle.svg";
import ProfileRabbitCircle from "src/assets/ProfileRabbitCircle.svg";
import ProfileBearCircle from "src/assets/ProfileBearCircle.svg";
import ProfileFoxCircle from "src/assets/ProfileFoxCircle.svg";
import ProfileCatCircle from "src/assets/ProfileCatCircle.svg";
import ProfileKoalaCircle from "src/assets/ProfileKoalaCircle.svg";
import ProfileLionCircle from "src/assets/ProfileLionCircle.svg";
import React from "react";
import { ReComment } from "../ReComment";
import "./style.css";

export const CommentMono = ({ className , props, commentMono}) => {
  const temp = commentMono
  console.log(temp)
  const profiles = [
    ProfileDogCircle,
    ProfileRabbitCircle,
    ProfileBearCircle,
    ProfileFoxCircle,
    ProfileCatCircle,
    ProfileKoalaCircle,
    ProfileLionCircle,
  ];
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth()+1;
    const day = date.getDate();
    
    return `${month}/${day}`;
  }

  const formatDate2 = (dateString) => {
    const date = new Date(dateString);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    return `${hours}:${minutes}`;
  }

  return (
    <div className={`comment-mono ${className}`}>
      <div className="comment-content">
        <div className="text-wrapper-4">
          {commentMono[0].content}
        </div>
      </div>
      
      <img className="comment-writer-icons" alt="image" src={profiles[commentMono[0].user.image]}/>
      <div className ="commment-total">
        <div className="comment-info">
          <img className="like-icon" alt="Like icon" src="https://c.animaapp.com/CeWmk5Rx/img/like-icon-5@2x.png" />
          <div className="text-wrapper-5">{props.like}</div>
          <div className="text-wrapper-6">{formatDate(props.postTime)}</div>
          <div className="text-wrapper-7">{formatDate2(props.postTime)}</div>
          <div className="re-comment-button">
            <div className="overlap-group">
              <div className="text-wrapper-8">답글 달기</div>
            </div>
          </div>
        </div>

        <div className="comment-writer" src ="https://c.animaapp.com/CeWmk5Rx/img/image-98@2x.png">
          <div className="text-wrapper-9">{commentMono[0].user.nickname}</div>
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

        {commentMono.filter((_, index) => index > 0)
        .map((reComment, index) => (
          <ReComment key={index} className="re-comment-instance" commentMono={reComment}/>
        ))}
        <div className="re-post-comment">
          <div className="post-comment-box">
            <div className="text-wrapper-18">입력하세요!!</div>
          </div>
          <img
            className="post-comment-button"
            alt="Post comment button"
            src="https://c.animaapp.com/CeWmk5Rx/img/postcommentbutton-2@2x.png"
          />
          <img className="post-comment-writer" src = {profiles[0]}/>  {/*수정해야할 부분*/}
        </div>

      </div>
    </div>
  );
};
