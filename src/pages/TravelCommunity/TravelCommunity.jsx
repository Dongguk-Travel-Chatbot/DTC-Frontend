import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { PageHeader } from "../../components/PageHeader";
import { Post } from "../../components/Post";
import "./style.css";
import { instance } from "src/apis/axios";
import { useLocation } from "react-router-dom";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [visiblePages, setVisiblePages] = useState([]);

  useEffect(() => {
    const calculatePages = () => {
      let startPage, endPage;
      if (totalPages <= 3) {
        startPage = 1;
        endPage = totalPages;
      } else if (currentPage <= 2) {
        startPage = 1;
        endPage = 3;
      } else if (currentPage >= totalPages - 1) {
        startPage = totalPages - 2;
        endPage = totalPages;
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      }
      const pages = [];
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      setVisiblePages(pages);
    };
    calculatePages();
  }, [currentPage, totalPages]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    } else if (page < 1) {
      alert("이미 첫 페이지입니다.");
    } else if (page > totalPages) {
      alert("이미 마지막 페이지입니다.");
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
        {"<<"}
      </button>
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        {"<"}
      </button>
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </button>
      ))}
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        {">"}
      </button>
      <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
        {">>"}
      </button>
    </div>
  );
};

export const TravelCommunity = () => {
  const [posts, setPosts] = useState([]);
  const [isUpload, setIsUpload] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();

  let headerOption = {
    pageTitle: "여행 게시판",
    backIcon: true,
    writeIcon: true,
    writeUrl: "/travel-post"
  };

  useEffect(() => {
    if (location.state?.newPost) {
      setIsUpload([location.state.newPost, ...posts]);
    }
    fetchPosts(currentPage);
  }, [location.state, currentPage]);

  const fetchPosts = (page) => {
    instance
      .get(`/api/community/travel?page=${page}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        const { content, totalPages } = response.data.data;
        setPosts(content);
        setTotalPages(totalPages);
      })
      .catch((error) => {
        console.error("게시물을 가져오는 중 오류 발생:", error);
      });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="travel-community">
      <PageHeader className="page-header-instance" props={headerOption} />
      <div className="posts-container">
        {posts.map((eachpost) => (
          <Post key={eachpost.id} className="post-instance" props={eachpost} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <Footer className="footer-instance" overlapGroupClassName="design-component-instance-node" />
    </div>
  );
};