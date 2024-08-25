import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../../apis/axios";

export const Redirection = () => {
  const code = new URLSearchParams(window.location.search).get("code");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(code);
    instance
      .get("/api/auth/login/kakao", { params: { code: code } })
      .then((response) => {
        console.log("Token received:", response.data);
        // 이후 토큰을 사용해 필요한 API 호출 등 처리

        const { is_member, jwt } = response.data.data;
        const { accessToken, refreshToken } = jwt;
        localStorage.setItem('token', accessToken);

        if (is_member) {
          navigate("/main");
        } else {
          navigate("/sign-up");
        }
      })
      .catch((error) => {
        console.error("Error exchanging code:", error);
      });
  }, []);

  return <div></div>;
};
