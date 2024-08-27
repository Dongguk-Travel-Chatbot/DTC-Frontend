import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { PageHeader } from "../../components/PageHeader";
import { Post } from "../../components/Post";
import "./style.css";
import axios from "axios";
import { instance } from "src/apis/axios";

export const TravelCommunty = () => {

  let [posts, setPosts] = useState([]);

  useEffect(() => {
    instance
      .get("/api/community/travel", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        setPosts(response.data.data); // 데이터를 성공적으로 받아오면 posts 업데이트
      })
      .catch((error) => {
        console.error("Error exchanging code:", error);
      });
  }, []);

  return (
    <div className="travel-communty">
      <PageHeader className="page-header-instance" />
      {
        posts.map(function(eachpost, i) {
          return <Post className="post-instance" props={eachpost}/>
        })
      }
      <Footer className="footer-instance" overlapGroupClassName="design-component-instance-node" />
    </div>
  );
};