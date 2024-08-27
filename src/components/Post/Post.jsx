import React, { useEffect } from "react";
import "./style.css";
import Like from "src/assets/Like.svg"
import Comment from "src/assets/Comment.svg"
import Scrap from "src/assets/Scrap.svg"
import ProfileDog from "src/assets/ProfileDog.svg";
import ProfileRabbit from "src/assets/ProfileRabbit.svg";
import ProfileBear from "src/assets/ProfileBear.svg";
import ProfileFox from "src/assets/ProfileFox.svg";
import ProfileCat from "src/assets/ProfileCat.svg";
import ProfileKoala from "src/assets/ProfileKoala.svg";
import ProfileLion from "src/assets/ProfileLion.svg";


export const Post = ({ className, props }) => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth()+1;
    const day = date.getDate();
    return `${month}/${day}`;
  }

  const profileImages = {
    0: ProfileDog,
    1: ProfileRabbit,
    2: ProfileBear,
    3: ProfileFox,
    4: ProfileCat,
    5: ProfileKoala,
    6: ProfileLion,
  };
  
  const profileImage = profileImages[props.user.image];

  return (
    <div className={`post ${className}`}>
      <div className="div">{props.title}</div>
      
      <div className="text-wrapper-2">{props.user.nickname}</div>
      <img className="image" alt="Image" src={profileImage} />

      <div className="post-like">
        <img className="vector" alt="Vector" src={Like} />
        <div className="text-wrapper-4">{props.like}</div>
      </div>

      <div className="post-comment">
        <img className="img" alt="Vector" src={Comment} />
        <div className="text-wrapper-3">{props.comment}</div>
  
      </div>

      <div className="post-scrap">
        <img className="vector" alt="Vector" src={Scrap} />
        <div className="text-wrapper-3">{props.scrap}</div>
      </div>

      <div className="text-wrapper">
        {props.post_time ? formatDate(props.post_time) : 'dateError'}
      </div>

      <img className="line" alt="Line" src="https://c.animaapp.com/lk34aNoN/img/line-5-1@2x.png" />
    </div>
  );
};
