import React, { useEffect, useState } from "react";
import { Comment } from "../../components/Comment";
import { TravelRecord } from "../../components/TravelRecord";
import "./style.css";
import { useParams } from "react-router-dom";
import { instance } from "src/apis/axios";
import { PageHeader } from "src/components/PageHeader";

export const PostDetails = () => {
  const { category, id } = useParams();
  const [ travel, setTravel ] = useState({});
  
  // category 값에 따라 게시판 이름 설정과 headerOption 생성
  const headerOption = {
    pageTitle: (() => {
      switch (category) {
        case "travel":
          return "여행 게시판";
        case "free":
          return "자유 게시판";
        case "hot":
          return "인기 게시판";
        default:
          return "기타 게시판";
      }
    })(), // 즉시 실행 함수로 pageTitle을 동적으로 설정
    backIcon: true,
    writeIcon: false
  };

  useEffect(() => {
    instance
      .get(`/api/community/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        const data = response.data.data;
        console.log(data);
        setTravel(response.data.data.travel)
      })
      .catch((error) => {
        console.error("Error exchanging code:", error);
      });
  }, []);

  return (
    <div className="post-details">
      <PageHeader className="page-header-instance" props={headerOption}/>

      <div className="post-writer">
        <img className="image" alt="Image" src="https://c.animaapp.com/CeWmk5Rx/img/image-98@2x.png" />
        <div className="text-wrapper-22">바니바니</div>
        <div className="text-wrapper-23">8/19</div>
        <div className="text-wrapper-24">20:00</div>
        <img className="edit-icons-2" alt="Edit icons" src="https://c.animaapp.com/CeWmk5Rx/img/editicons-3@2x.png" />
        <div className="modify-button-2">
          <div className="overlap-group-5">
            <div className="text-wrapper-25">수정하기</div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-group-5">
            <div className="text-wrapper-25">삭제하기</div>
          </div>
        </div>
      </div>

      <TravelRecord className="travel-record-instance" props={travel}/>

      <div className="post-title">
        <div className="text-wrapper-20">본문 제목</div>
      </div>

      <div className="post-content">
        <div className="text-wrapper-19">
          본문
          <br />
          글적기 중!
          <br />
          주절주절
        </div>
      </div>
      
      <div className="post-info">
        <div className="overlap-group-4">
          <div className="post-like">
            <img className="img-2" alt="Post like" src="https://c.animaapp.com/CeWmk5Rx/img/postlike@2x.png" />
            <div className="text-wrapper-21">21</div>
          </div>
          
          <div className="post-comment">
            <img className="img-2" alt="Post comment" src="https://c.animaapp.com/CeWmk5Rx/img/postcomment@2x.png" />
            <div className="text-wrapper-21">31</div>
          </div>
          
          <div className="post-scrap">
            <img className="post-scrap-2" alt="Post scrap" src="https://c.animaapp.com/CeWmk5Rx/img/postscrap@2x.png" />
            <div className="element-2">11</div>
          </div>
        </div>
        <img className="post-line" alt="Post line" src="https://c.animaapp.com/CeWmk5Rx/img/postlile-1@2x.png" />
      </div>

      
      <Comment className="comment-instance" />
      
      <div className="post-comment-frame">
        <img className="post-line-2" alt="Post line" src="https://c.animaapp.com/CeWmk5Rx/img/postlile-1@2x.png" />
        <div className="post-comment-2">
          <div className="post-comment-writer-2" />
          <div className="post-comment-box-2">
            <div className="text-wrapper-26">입력하세요.</div>
          </div>
          <img
            className="post-comment-button-2"
            alt="Post comment button"
            src="https://c.animaapp.com/CeWmk5Rx/img/postcommentbutton-2@2x.png"
          />
        </div>
      </div>
      
    </div>
  );
};
