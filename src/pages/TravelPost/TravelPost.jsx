import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PageHeader } from "src/components/PageHeader";
import { instance } from "src/apis/axios";
import { TravelComponent } from "src/components/TravelComponent";
import "./style.css";

export const TravelPost = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 제목과 본문 상태
  const [title, setTitle] = useState(localStorage.getItem('postTitle') || "");
  const [content, setContent] = useState(localStorage.getItem('postContent') || "");
  const [record, setRecord] = useState(location.state?.selectedRecord || null);

  useEffect(() => {
    // 페이지가 로드될 때, URL 상태에서 제목과 내용을 설정합니다.
    if (record) {
      setRecord(record);
      console.log(record)
    }
  }, [record]);

  useEffect(() => {
    // 제목이나 본문이 변경될 때마다 localStorage에 저장
    localStorage.setItem('postTitle', title);
    localStorage.setItem('postContent', content);
  }, [title, content]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  const handleClipClick = () => {
    navigate("/TravelClip");
  };

  return (
    <div className="travel-post">
      <PageHeader className="page-header-instance" props={{ pageTitle: "글쓰기", backIcon: true, writeIcon: true }} />
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
        {/* 선택한 컴포넌트를 하단에 렌더링 */}
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
    </div>
  );
};