import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { ChatAi } from "../../components/ChatAi";
import { ChatUser } from "../../components/ChatUser";
import { PageHeader } from "src/components/PageHeader";
import { instance } from "src/apis/axios";
import { useNavigate } from "react-router-dom";
import Loading from "./loading.gif";

export const ChatAiTravel = () => {
  const [chats, setChats] = useState([]);
  const [userChat, setUserChat] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);
  const textareaRef = useRef(null);
  const [transition, setTransition] = useState(false);
  const navigate = useNavigate();
  const [stepChange, setStepChange] = useState(0);
  const [travelId, setTravelId] = useState(0);

  useEffect(() => {
    const initialMessage = {
      type: "ai",
      content: `여행 계획을 위해 몇 가지 정보를 여쭤볼게요:<br />
      1. 선호하는 목적지가 있나요?<br />
      2. 예산은 얼마인가요?<br />
      3. 선호하는 여행 스타일은 무엇인가요? (예: 휴양, 문화 탐방, 액티비티, 미식 등)<br />
      4. 하고 싶은 활동이나 체험이 있으신가요?<br />
      5. 선호하는 숙소 유형은 무엇인가요? (호텔, 게스트하우스, 에어비앤비 등)<br />
      6. 이동 수단은 무엇을 선호하시나요? (렌터카, 대중교통, 도보 등)<br />
      7. 식사에 대한 선호사항이 있나요? (예: 특정 음식, 식단 제한 등)<br />
      이 질문들에 대한 답변을 키워드로 주시면 맞춤형 여행 계획을 세우는 데 도움이 될 거예요.`,
      className: 'chat-bubble-only'
    };
    setChats([initialMessage]);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  const handleUserChatChange = (e) => {
    setUserChat(e.target.value);

    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  const handleClick = (id) => {
    setSelectedIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((prevId) => prevId !== id)
        : [...prevIds, id]
    );
  };

  const handleChatSubmit = () => {
    let request = userChat;
    const length = selectedIds.length;

    if (length > 0) {
      request = selectedIds.join(" ");
      setSelectedIds([]);
    }

    if (request.trim() !== "") {
      if (length === 0){
        const newUserChat = { type: "user", content: request };
        setChats((prevChats) => [...prevChats, newUserChat]);
      }

      setLoading(true);

      instance
        .post("/openai", { question: request }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          setLoading(false);
          const step = response.data.data.step;
          setStepChange(step);
          switch(step) {
            case 1:
              const { description, places } = response.data.data;

              const aiDescriptionResponse = {
                type: "ai",
                content: description,
                className: 'chat-bubble'
              };
              setChats((prevChats) => [...prevChats, aiDescriptionResponse]);

              places.forEach((place, index) => {
                let bubbleClass = 'chat-bubble-middle';
                if (index === places.length - 1) {
                  bubbleClass = 'chat-bubble-last';
                }
                const aiChatResponse = {
                  type: "ai",
                  content: `${place.place}:<br />${place.description}`,
                  className: bubbleClass,
                  id: place.id 
                };
                setChats((prevChats) => [...prevChats, aiChatResponse]);
              });
              break;
            case 2:
              const { recommends } = response.data.data;

              recommends.forEach((recommend, index) => {
                let bubbleClass = 'chat-bubble-middle';
                if(index === 0) {
                  bubbleClass = 'chat-bubble'
                }
                if (index === recommends.length - 1) {
                  bubbleClass = 'chat-bubble-last';
                }
                const aiChatResponse = {
                  type: "ai",
                  content: `${recommend.day}<br />${recommend.plan}`,
                  className: bubbleClass
                }
              setChats((prevChats) => [...prevChats, aiChatResponse]);
              });
              break;
            
              case 3:
              const { fixed_message, fixed_recommends } = response.data.data;

              const aiFixedResponse = {
                type: "ai",
                content: fixed_message,
                className: 'chat-bubble'
              };
              setChats((prevChats) => [...prevChats, aiFixedResponse]);

              fixed_recommends.forEach((fixed_recommend, index) => {
                let bubbleClass = 'chat-bubble-middle';
                if (index === fixed_recommends.length - 1) {
                  bubbleClass = 'chat-bubble-last';
                }
                const aiFixedResponse = {
                  type: "ai",
                  content: `${fixed_recommend.day}<br />${fixed_recommend.plan}`,
                  className: bubbleClass
                };
              setChats((prevChats) => [...prevChats, aiFixedResponse]);
              });
              break;

            case 4:
              const { final_message, travel_id, final_recommends } = response.data.data;

              const aiFinalResponse = {
                type: "ai",
                content: final_message,
                className: 'chat-bubble'
              };

              setTravelId(travel_id);
              setChats((prevChats) => [...prevChats, aiFinalResponse]);

              final_recommends.forEach((final_recommend, index) => {
                let bubbleClass = 'chat-bubble-middle';
                if (index === final_recommends.length - 1) {
                  bubbleClass = 'chat-bubble-final';
                }
                const aiFinalResponse = {
                  type: "ai",
                  content: `${final_recommend.day}<br />${final_recommend.plan}`,
                  className: bubbleClass
                };
                setChats((prevChats) => [...prevChats, aiFinalResponse]);
              });
              break;
            
            default:
              break;
            }
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error fetching AI response:", error);
          // 에러 처리 - 기본 오류 메시지 추가
          const aiErrorResponse = {
            type: "ai",
            content: "챗봇 응답을 가져오는 데 오류가 발생했습니다. 나중에 다시 시도해주세요.",
            className: 'chat-bubble-only' // 기본 클래스

          };
          setChats((prevChats) => [...prevChats, aiErrorResponse]);
        });

      setUserChat("");
      textareaRef.current.style.height = "auto";
    }
    
  };

  useEffect(() => {
    if (stepChange === 4) {
      const timer = setTimeout(() => {
      setTransition(true);
      }, 3000);
    return () => clearTimeout(timer); 
      }
  }, [stepChange]);

  useEffect(() => {
    if (transition) {
      navigate("/record-detail" + "/" + travelId);
    }
  }, [transition, navigate]);

  let headerOption = {
    pageTitle: "",
    backIcon: true,
    writeIcon: false,
  };

  return (
    <div className="chat-AI-travel">
      <PageHeader className="page-header-instance" props={headerOption} />

      <div className="overlap">
        <div className="text-wrapper">Chatbot travel plan</div>
        <img className="image" alt="Image" src="https://c.animaapp.com/wRSaELis/img/image-106@2x.png" />
        {loading && 
          <div className="loading-container">
            <img src={Loading} alt="로딩중" style={{zIndex:"1000"}}/>
            <div className="loaging-text">✈️여행정보를 찾는 중...✈️</div>
          </div>}
        <div className="chat-content">
          {chats.map((chat, index) => (
              chat.type === "ai" ? (
                <ChatAi
                 key={index}
                 className={chat.className}
                 content={chat.content}
                 isSelected={selectedIds.includes(chat.id)}
                 onClick={() => handleClick(chat.id)}
                 />
              ) : (
                <ChatUser key={index} className="chat-user-instance" content={chat.content} />
              )
          )
          )}
          <div ref={chatEndRef}/>
        </div>
      </div>
      
      <div className="chat-input-box">
        <div className="chat-group">
          <div className="overlap-group">
            <input
              ref={textareaRef}
              className="content-wrapper"
              value={userChat}
              onChange={handleUserChatChange}
              style = {{
                height: "30px",
                width: "305px",
                border: "none",
                outline: "none",
                backgroundColor: "#f5f5f5",
                fontFamily: "'Gmarket Sans TTF-light', Helvetica",
                fontSize: "12px",
                textAlign: "left",
                borderRadius: "10px",
              }}
            />
            <img
              className="vector"
              alt="Vector"
              src="https://c.animaapp.com/wRSaELis/img/vector@2x.png"
              onClick={handleChatSubmit}
              />
          </div>
        </div>
      </div>
    </div>
  );
};