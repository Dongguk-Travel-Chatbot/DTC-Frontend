
import React from "react";
import "./style.css";

import ProfileDogCircle from "src/assets/ProfileDogCircle.svg";
import ProfileRabbitCircle from "src/assets/ProfileRabbitCircle.svg";
import ProfileBearCircle from "src/assets/ProfileBearCircle.svg";
import ProfileFoxCircle from "src/assets/ProfileFoxCircle.svg";
import ProfileCatCircle from "src/assets/ProfileCatCircle.svg";
import ProfileKoalaCircle from "src/assets/ProfileKoalaCircle.svg";
import ProfileLionCircle from "src/assets/ProfileLionCircle.svg";


export const ReComment = ({ className, commentMono}) => {
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
    <div className={`re-comment ${className}`}>
      <div className="re-comment-info">
        <img className="like-icon-2" alt="Like icon" src="https://c.animaapp.com/CeWmk5Rx/img/like-icon-5@2x.png" />
        <div className="text-wrapper-11">{temp.like}</div>
        <div className="text-wrapper-12">{formatDate(temp.commentTime)}</div>
        <div className="text-wrapper-13">{formatDate2(temp.commentTime)}</div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <div className="text-wrapper-14">답글 달기</div>
          </div>
        </div>
      </div>
      <div className="re-comment-content">
        <div className="text-wrapper-15">{temp.content}</div>
      </div>
         
      <img className="re-comment-writer" src={profiles[temp.user.image]}/>

          
      <div className="re-comment-writer-2">
        <div className="text-wrapper-16">{temp.user.nickname}</div>
        <img
          className="re-edit-icons"
          alt="Re edit icons"
          src={"https://c.animaapp.com/CeWmk5Rx/img/editicons-3@2x.png"}
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
