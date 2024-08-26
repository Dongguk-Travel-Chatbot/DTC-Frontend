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
        setPosts(response.data.data)
      })
      .catch((error) => {
        console.error("Error exchanging code:", error);
      });
      console.log(posts)
  }, []);

  return (
    <div className="travel-communty">
      <PageHeader className="page-header-instance" />

      {
        posts.map(function(post, i){
          return <Post className="post-instance" props={post} key={i}/>
        })
      }

      <Footer className="footer-instance" overlapGroupClassName="design-component-instance-node" />
    </div>
  );
};
