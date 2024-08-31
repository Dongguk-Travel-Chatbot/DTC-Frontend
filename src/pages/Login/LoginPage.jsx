import React, { useEffect } from "react";
import LoginImage from "src/assets/LoginImage.svg";
import KakaoLogin from "src/assets/KakaoLogin.svg";
import "./style.css";

export const LoginPage = () => {
  let clientId = process.env.REACT_APP_KAKAO_API_KEY;
  let redirectUri = process.env.REACT_APP_KAKAO_REDIRECT_URI;

  // 카카오 로그인 버튼 클릭 시 실행
  const handleKakaoLogin = async () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
    window.location.href = kakaoAuthUrl; // 카카오 인증 페이지로 리디렉션
  };

  return (
    <div className="login">
      <div className="text-wrapper">Customize your travel</div>
      <p className="DTC-GPT">
        DTC는 여행 계획을 맞춤형으로 짜주는 서비스입니다.
        <br /> 챗GPT와 함께 나만의 특별한 여행 일정을 만들어보세요!
      </p>
      <img
        className="login-image"
        alt="Login image"
        src="https://c.animaapp.com/BgCv2trq/img/-loginimage.svg"
      />
      <img
        className="kakao-login"
        alt="Kakao login"
        src="https://c.animaapp.com/BgCv2trq/img/kakao-login.svg"
        onClick={handleKakaoLogin}
      />
      <img
        className="DTC"
        alt="Dtc"
        src="https://c.animaapp.com/BgCv2trq/img/dtc.svg"
      />
    </div>
  );
};
