import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PageHeader } from "src/components/PageHeader";
import { instance } from "src/apis/axios";
import { TravelComponent } from "src/components/TravelComponent";
import "./style.css";

export const FreePost = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let headerOption = {
    pageTitle: "글쓰기",
    backIcon: true,
    writeIcon: true,
    writeUrl: "/freecommunity", // POST 요청 성공 시 이동할 URL 설정
  };

  // 제목과 본문 상태
  const [title, setTitle] = useState(localStorage.getItem('postTitle') || "");
  const [content, setContent] = useState(localStorage.getItem('postContent') || "");
  const [record, setRecord] = useState(null);

  useEffect(() => {
    if (location.state?.selectedRecord) {
      console.log("Record found in location.state:", location.state.selectedRecord);
      setRecord(location.state.selectedRecord);
    } else {
      console.log("No record found in location.state. Proceeding without a record.");
    }
  }, [location.state]);

  useEffect(() => {
    localStorage.setItem('postTitle', title);
    localStorage.setItem('postContent', content);
  }, [title, content]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  const handleWritePost = async () => {
    // 제목이나 내용이 비어 있는지 확인
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return; // 제목이나 내용이 비어 있으면 요청을 보내지 않음
    }

    console.log("Attempting to send POST request...");

    try {
      const postData = {
        title: title,
        content: content,
      };

      if (record && record.travel_record_id) {
        postData.travel_record_id = record.travel_record_id;
      }

      const response = await instance.post(
        "/api/community",
        postData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("POST request successful:", response);

      // 요청이 성공한 후 상태를 초기화하고 페이지를 이동
      localStorage.removeItem('postTitle');
      localStorage.removeItem('postContent');
      setTitle("");
      setContent("");
      navigate("/freeCommunity", { state: { newPost: response.data.success } });
    } catch (error) {
      console.error("글쓰기 요청 실패:", error);
    }
  };

  return (
    <div className="free-post">
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
    </div>
  );
};
