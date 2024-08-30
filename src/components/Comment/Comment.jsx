/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React, { useEffect, useState } from "react";
import { CommentMono } from "../CommentMono";
import { ReComment } from "../ReComment";
import { instance } from "src/apis/axios";
import { useParams } from "react-router-dom";

import "./style.css";


import ProfileDogCircle from "src/assets/ProfileDogCircle.svg";
import ProfileRabbitCircle from "src/assets/ProfileRabbitCircle.svg";
import ProfileBearCircle from "src/assets/ProfileBearCircle.svg";
import ProfileFoxCircle from "src/assets/ProfileFoxCircle.svg";
import ProfileCatCircle from "src/assets/ProfileCatCircle.svg";
import ProfileKoalaCircle from "src/assets/ProfileKoalaCircle.svg";
import ProfileLionCircle from "src/assets/ProfileLionCircle.svg";

export const Comment = ({ className , props}) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const [sortedComments ,setComments] = useState([])

  const profiles = [
    ProfileDogCircle,
    ProfileRabbitCircle,
    ProfileBearCircle,
    ProfileFoxCircle,
    ProfileCatCircle,
    ProfileKoalaCircle,
    ProfileLionCircle,
  ];

  useEffect(() => {
    instance
      .get(`api/comments/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const data = response.data.data;
        console.log(data)
        setComments(data)

        setLoading(false); // 데이터 로드가 완료되면 로딩 상태를 false로 변경
      })
      .catch((error) => {
        console.error("Error fetching post details:", error);
        setLoading(false); // 에러가 발생해도 로딩 상태를 false로 변경
      });
  }, [id]);

  return (
    <div className={`comment ${className}`}>
      {sortedComments.map((comment, index) => (
        <CommentMono
          key={index} // key를 사용하여 각 CommentMono에 고유 식별자를 부여합니다.
          className="comment-mono-instance"
          props={props}
          commentMono={comment}
        />
      ))}
    </div>
  );
};
