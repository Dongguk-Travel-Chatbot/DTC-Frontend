import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { PageHeader } from "../../components/PageHeader";
import { Post } from "../../components/Post";
import "./style.css";
import { instance } from "src/apis/axios";
import { useLocation, useNavigate } from "react-router-dom";

export const FreeCommunity = () => {
  const [posts, setPosts] = useState([]);
  const [isUpload, setIsUpload] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  let headerOption = {
    pageTitle: "자유 게시판",
    backIcon: true,
    writeIcon: true,
    writeUrl: "/free-post"
  };

  useEffect(() => {
    if (location.state?.newPost) {
      setIsUpload([location.state.newPost, ...posts]);
    }

    instance
      .get("/api/community/free", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        const data = response.data.data.content;
        setPosts(data); // 데이터를 성공적으로 받아오면 posts 업데이트
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [location.state]); // 빈 배열을 의존성으로 설정하여 컴포넌트가 처음 렌더링될 때만 호출되도록 합니다.

  return (
    <div className="free-community">
      <PageHeader className="page-header-instance" props={headerOption} />
      {
        posts.map((eachpost) => (
          <div onClick={()=>{navigate("/post-details/free/" + eachpost.post_id)}}> 
            <Post key={eachpost.id} className="post-instance" props={eachpost} />  // 고유한 key prop 추가
          </div>
        ))
      }
      <Footer className="footer-instance" overlapGroupClassName="design-component-instance-node" />
    </div>
  );
};