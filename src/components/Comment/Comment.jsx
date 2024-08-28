/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { CommentMono } from "../CommentMono";
import { ReComment } from "../ReComment";
import "./style.css";

export const Comment = ({ className }) => {
  return (
    <div className={`comment ${className}`}>
      <CommentMono className="comment-mono-instance" />
      <div className="re-post-comment">
        <div className="post-comment-box">
          <div className="text-wrapper-18">입력하세요.</div>
        </div>
        <img
          className="post-comment-button"
          alt="Post comment button"
          src="https://c.animaapp.com/CeWmk5Rx/img/postcommentbutton-2@2x.png"
        />
        <div className="post-comment-writer" />
      </div>
      <ReComment className="re-comment-instance" />
    </div>
  );
};
