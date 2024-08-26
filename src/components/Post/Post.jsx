import React from "react";
import "./style.css";
import Like from "src/assets/Like.svg"
import Comment from "src/assets/Comment.svg"
import Scrap from "src/assets/Scrap.svg"

export const Post = ({ className, props }) => {
  return (
    <div className={`post ${className}`}>
      <div className="div">{props.title}</div>
      
      <div className="text-wrapper-2">{props.user.nickname}</div>
      <img className="image" alt="Image" src="https://c.animaapp.com/lk34aNoN/img/image-99-1@2x.png" />

      
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

      <div className="text-wrapper">6/14</div>

      <img className="line" alt="Line" src="https://c.animaapp.com/lk34aNoN/img/line-5-1@2x.png" />
    </div>
  );
};
