import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PageHeader } from "src/components/PageHeader";
import { instance } from "src/apis/axios";
import { TravelComponent } from "src/components/TravelComponent";
import "./style.css";

export const TravelPost = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let headerOption = {
    pageTitle: "글쓰기",
    backIcon: true,
    writeIcon: true,
    writeUrl: "/travel-community", // POST 요청 성공 시 이동할 URL 설정
  };

  // 제목과 본문 상태
  const [title, setTitle] = useState(localStorage.getItem('postTitle') || "");
  const [content, setContent] = useState(localStorage.getItem('postContent') || "");
  const [record, setRecord] = useState(null);
  const [posts, setPosts] = useState([]); // 글 목록 상태

  useEffect(() => {
    if (location.state?.selectedRecord) {
      console.log("Record found in location.state:", location.state.selectedRecord);
      setRecord(location.state.selectedRecord);
    } else {
      console.log("No record found in location.state.");
    }

    // 기존 글 목록을 불러오기
    const fetchPosts = async () => {
      try {
        const response = await instance.get("/api/community/posts?sort=post_time,desc");
        console.log("Fetched posts:", response.data.posts);
        setPosts(response.data.posts);
      } catch (error) {
        console.error("기존 글 목록 불러오기 실패:", error);
      }
    };

    fetchPosts();
  }, [location.state]);

  useEffect(() => {
    localStorage.setItem('postTitle', title);
    localStorage.setItem('postContent', content);
  }, [title, content]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  const handleClipClick = () => {
    navigate("/travel-clip");
  };

  const handleWritePost = async () => {
    // 제목이나 내용이 비어 있는지 확인
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return; // 제목이나 내용이 비어 있으면 요청을 보내지 않음
    }

    // travel_record_id가 있는지 확인
    if (!record || !record.travel_record_id) {
      alert("여행 기록을 선택해주세요.");
      return; // travel_record_id가 없으면 요청을 보내지 않음
    }

    console.log("Attempting to send POST request...");
    console.log("Record being sent:", record);

    try {
      const response = await instance.post(
        "/api/community",
        {
          title: title,
          content: content,
          travel_id: record.travel_record_id,  // travel_record_id 사용
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("POST request successful, received response:", response.data);

      // 백엔드에서 반환된 새 글 정보를 사용해 posts 배열을 업데이트
      setPosts([response.data.post, ...posts]);

      console.log("Updated posts list after adding new post:", [response.data.post, ...posts]);

      // 요청이 성공한 후 상태를 초기화하고 페이지를 이동
      localStorage.removeItem('postTitle');
      localStorage.removeItem('postContent');
      setTitle("");
      setContent("");
      navigate("/travelcommunity", { state: { newPost: response.data.success } });
    } catch (error) {
      console.error("글쓰기 요청 실패:", error);
    }
  };

  return (
    <div className="travel-post">
      <PageHeader
        className="page-header-instance"
        props={headerOption}
        onWriteIconClick={handleWritePost}  // WriteIcon 클릭 시 handleWritePost 호출
      />
      <div className="post-write">
        <input
          className="menu"
          placeholder="제목을 입력하세요."
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          className="content-wrapper"
          placeholder="내용을 입력하세요."
          value={content}
          onChange={handleContentChange}
        ></textarea>
        <img className="line" alt="Line" src="https://c.animaapp.com/q591QOCC/img/line-5@2x.png" />
      </div>
      <div className="attached-travel-component">
        {record && (
          <TravelComponent
            className="rendered-travel-component"
            props={record}
          />
        )}
      </div>
      <div className="clip-travel">
        <button onClick={handleClipClick}>
          <img className="image" alt="Clip travel" src="https://c.animaapp.com/q591QOCC/img/cliptravel@2x.png" />
        </button>
      </div>

      {/* 게시글 목록을 표시하는 부분 */}
      <div className="post-list">
        {posts.map((post, index) => (
          <div key={index} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
