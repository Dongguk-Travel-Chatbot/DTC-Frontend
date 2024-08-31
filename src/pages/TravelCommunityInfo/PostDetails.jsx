import React, { useEffect, useState } from "react";
import { Comment } from "../../components/Comment";
import { TravelRecord } from "../../components/TravelRecord";
import "./style.css";
import { useParams } from "react-router-dom";
import { instance } from "src/apis/axios";
import { PageHeader } from "src/components/PageHeader";

import ProfileDogCircle from "src/assets/ProfileDogCircle.svg";
import ProfileRabbitCircle from "src/assets/ProfileRabbitCircle.svg";
import ProfileBearCircle from "src/assets/ProfileBearCircle.svg";
import ProfileFoxCircle from "src/assets/ProfileFoxCircle.svg";
import ProfileCatCircle from "src/assets/ProfileCatCircle.svg";
import ProfileKoalaCircle from "src/assets/ProfileKoalaCircle.svg";
import ProfileLionCircle from "src/assets/ProfileLionCircle.svg";

export const PostDetails = () => {
  const { category, id } = useParams();
  const [travel, setTravel] = useState({});
  const [user, setUser] = useState({});
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState({});
  const [comments, setComments] = useState([]); // 빈 배열로 초기화
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const [comment, setComment] = useState(""); // 입력된 댓글을 저장하는 상태

  const profiles = [
    ProfileDogCircle,
    ProfileRabbitCircle,
    ProfileBearCircle,
    ProfileFoxCircle,
    ProfileCatCircle,
    ProfileKoalaCircle,
    ProfileLionCircle,
  ];

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
    })(),
    backIcon: true,
    writeIcon: false,
  };

  const changeLocalDateTime = (localDateTime) => {
    if (!localDateTime) {
      return { date: "N/A", time: "N/A" };
    }

    const month = localDateTime.substring(5, 7);
    const day = localDateTime.substring(8, 10);
    const formattedDate = `${month}/${day}`;
    const formattedTime = localDateTime.substring(11, 16);
    return { date: formattedDate, time: formattedTime };
  };

  useEffect(() => {
    instance
      .get(`/api/community/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const data = response.data.data;
        const { date, time } = changeLocalDateTime(data.postTime);

        setTravel(data.travel);
        setUser(data.user);
        setData(data);
        setDate(date);
        setTime(time);
        setComments(data.comments || []);
        setLoading(false); // 데이터 로드가 완료되면 로딩 상태를 false로 변경
      })
      .catch((error) => {
        console.error("Error fetching post details:", error);
        setLoading(false); // 에러가 발생해도 로딩 상태를 false로 변경
      });
  }, [id]);

  const handleCommentChange = (event) => {
    setComment(event.target.value); // 입력된 값을 상태에 저장
  };

  const handleCommentSubmit = () => {
    // 댓글 제출 로직 처리
    console.log("Submitted comment:", comment);
    setComment(""); // 입력창 초기화
    // 추가로 서버에 댓글을 전송하는 로직을 추가할 수 있습니다.
  };

  if (loading) {
    return <div></div>; // 로딩 중일 때 보여줄 화면
  }

  return (
    <div className="post-details">
      <PageHeader className="page-header-instance" props={headerOption} />
      
      <div className="overlap">
        <div className="post-writer">
          <img className="image" alt="Image" src={profiles[user.image]} />
          <div className="text-wrapper-22">{user.nickname || "익명"}</div>
          <div className="text-wrapper-23">{date}</div>
          <div className="text-wrapper-24">{time}</div>
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
        <TravelRecord className="travel-record-instance" props={travel} />

        <div className="post-title">
          <div className="text-wrapper-20">{data.title}</div>
        </div>

        <div className="post-content">
          <div className="text-wrapper-19">{data.content}</div>
        </div>

        <div className="post-info">
          <div className="overlap-group-4">
            <div className="post-like">
              <img className="img-2" alt="Post like" src="https://c.animaapp.com/CeWmk5Rx/img/postlike@2x.png" />
              <div className="text-wrapper-21">{data.like || 0}</div>
            </div>

            <div className="post-comment">
              <img className="img-2" alt="Post comment" src="https://c.animaapp.com/CeWmk5Rx/img/postcomment@2x.png" />
              <div className="text-wrapper-21">{data.comment || 0}</div>
            </div>

            <div className="post-scrap">
              <img className="post-scrap-2" alt="Post scrap" src="https://c.animaapp.com/CeWmk5Rx/img/postscrap@2x.png" />
              <div className="element-2">{data.scrap}</div>
            </div>
          </div>
          <img className="post-line" alt="Post line" src="https://c.animaapp.com/CeWmk5Rx/img/postlile-1@2x.png" />
        </div>

        <Comment className="comment-instance" props={data} />
      </div>

      <div className="post-comment-frame">
        <img className="post-line-2" alt="Post line" src="https://c.animaapp.com/CeWmk5Rx/img/postlile-1@2x.png" />
        <div className="post-comment-2">
          <img className="post-comment-writer-2" src={profiles[0]} /> 
          <input
            type="text"
            className="post-comment-box-2"
            placeholder="입력하세요"
            value={comment} // 상태값을 input의 value에 바인딩
            onChange={handleCommentChange} // 값이 변경될 때마다 handleCommentChange 호출
          />
          <img
            className="post-comment-button-2"
            alt="Post comment button"
            src="https://c.animaapp.com/CeWmk5Rx/img/postcommentbutton-2@2x.png"
            onClick={handleCommentSubmit} // 버튼 클릭 시 handleCommentSubmit 호출
          />
        </div>
      </div>
    </div>
  );
};