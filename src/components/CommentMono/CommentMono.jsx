import React, { useState } from "react";
import ProfileDogCircle from "src/assets/ProfileDogCircle.svg";
import ProfileRabbitCircle from "src/assets/ProfileRabbitCircle.svg";
import ProfileBearCircle from "src/assets/ProfileBearCircle.svg";
import ProfileFoxCircle from "src/assets/ProfileFoxCircle.svg";
import ProfileCatCircle from "src/assets/ProfileCatCircle.svg";
import ProfileKoalaCircle from "src/assets/ProfileKoalaCircle.svg";
import ProfileLionCircle from "src/assets/ProfileLionCircle.svg";
import { ReComment } from "../ReComment";
import "./style.css";

export const CommentMono = ({ className, props, commentMono }) => {
  const [comment, setComment] = useState(""); // 입력값을 저장하는 상태

  const temp = commentMono;
  console.log(temp);
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
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${month}/${day}`;
  };

  const formatDate2 = (dateString) => {
    const date = new Date(dateString);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value); // 입력된 값을 상태에 저장
  };

  const handleSubmit = () => {
    // 댓글 제출 로직 처리
    console.log("Submitted comment:", comment);
    setComment(""); // 입력창 초기화
  };

  return (
    <div className={`comment-mono ${className}`}>
      <div className="comment-content">
        <div className="text-wrapper-4">{commentMono[0].content || null}</div>
      </div>

      <img
        className="comment-writer-icons"
        alt="image"
        src={profiles[commentMono[0].user.image] || null}
      />
      <div className="comment-total">
        <div className="comment-info">
          <img
            className="like-icon"
            alt="Like icon"
            src="https://c.animaapp.com/CeWmk5Rx/img/like-icon-5@2x.png"
          />
          <div className="text-wrapper-5">{commentMono[0].like || 0}</div>
          <div className="text-wrapper-6">{formatDate(props.postTime)}</div>
          <div className="text-wrapper-7">{formatDate2(props.postTime)}</div>
          <div className="re-comment-button">
            <div className="overlap-group">
              <div className="text-wrapper-8">답글 달기</div>
            </div>
          </div>
        </div>

        <div className="comment-writer">
          <div className="text-wrapper-9">
            {commentMono[0].user.nickname || null}
          </div>
          <img
            className="edit-icons"
            alt="Edit icons"
            src="https://c.animaapp.com/CeWmk5Rx/img/editicons-3@2x.png"
          />
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

        {commentMono
          .filter((_, index) => index > 0)
          .map((reComment, index) => (
            <ReComment
              key={index}
              className="re-comment-instance"
              commentMono={reComment}
            />
          ))}
        <div className="re-post-comment">
          <input
            type="text"
            className="post-comment-box"
            placeholder="입력하세요"
            value={comment} // 상태값을 input의 value에 바인딩
            onChange={handleCommentChange} // 값이 변경될 때마다 handleCommentChange 호출
          />
          <img
            className="post-comment-button"
            alt="Post comment button"
            src="https://c.animaapp.com/CeWmk5Rx/img/postcommentbutton-2@2x.png"
            onClick={handleSubmit} // 버튼 클릭 시 handleSubmit 호출
          />
          <img className="post-comment-writer" src={profiles[0]} />{" "}
        </div>
      </div>
    </div>
  );
};