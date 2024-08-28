import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { PageHeader } from "../../components/PageHeader";
import { FreePost } from "../../components/FreePost";
import "./style.css";
import axios from "axios";
import { instance } from "src/apis/axios";

export const FreeCommunity = () => {

  let [posts, setPosts] = useState([]);
  let headerOption = {
    pageTitle : "자유 게시판",
    backIcon : true,
    writeIcon : true,
    writeUrl : "/free-post"
  }

  useEffect(() => {
    instance
      .get("/api/community/free", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        setPosts(response.data.data.content); // 데이터를 성공적으로 받아오면 posts 업데이트
      })
      .catch((error) => {
        console.error("Error exchanging code:", error);
      });
  }, []);

  return (
    <div className="free-community">
      <PageHeader className="page-header-instance" props={headerOption}/>
      {
        posts.map(function(eachpost, i) {
          return <FreePost className="post-instance" props={eachpost} key={i}/>
        })
      }
      <Footer className="footer-instance" overlapGroupClassName="design-component-instance-node" />
    </div>
  );
};