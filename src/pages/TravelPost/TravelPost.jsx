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
    writeUrl: "/travelcommunity", // POST 요청 성공 시 이동할 URL 설정
  };

  // 제목과 본문 상태
  const [title, setTitle] = useState(localStorage.getItem('postTitle') || "");
  const [content, setContent] = useState(localStorage.getItem('postContent') || "");
  const [record, setRecord] = useState(null);

  useEffect(() => {
    // 강제로 record를 설정하여 테스트
    const testRecord = {
      travel_record_id: 1,  // 가상의 ID
      title: "Test Title",
      place: "Test Place",
      depart_at: "2023-01-01",
      arrive_at: "2023-01-10",
      image_url: "https://example.com/test.jpg"
    };

    if (location.state?.selectedRecord) {
      console.log("Record found in location.state:", location.state.selectedRecord);
      setRecord(location.state.selectedRecord);
    } else {
      console.log("No record found in location.state. Using test record.");
      setRecord(testRecord);  // 강제로 설정
    }
  }, [location.state]);

  useEffect(() => {
    localStorage.setItem('postTitle', title);
    localStorage.setItem('postContent', content);
  }, [title, content]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  const handleClipClick = () => {
    navigate("/TravelClip");
  };

  const handleWritePost = async () => {
    console.log("Attempting to send POST request...");
    console.log(record);
    console.log(record.travel_record_id);

    if (record && record.travel_record_id) {  // record와 travel_record_id가 존재할 때만 요청을 보냅니다
      console.log("Record exists, sending POST request with the following data:");
      console.log("Title:", title);
      console.log("Content:", content);
      console.log("Travel Record ID:", record.travel_record_id);  // travel_record_id 출력

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

        console.log("POST request successful:", response);

        // 요청이 성공한 후 상태를 초기화하고 페이지를 이동
        localStorage.removeItem('postTitle');
        localStorage.removeItem('postContent');
        setTitle("");
        setContent("");
        navigate("/travelcommunity", { state: { newPost: response.data.success } });
      } catch (error) {
        console.error("글쓰기 요청 실패:", error);
      }
    } else {
      console.log("글쓰기 요청을 보낼 수 없습니다. record가 없습니다.");
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
    </div>
  );
};
