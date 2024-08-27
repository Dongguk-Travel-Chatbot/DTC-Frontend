import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login/LoginPage";
import { Redirection } from "../pages/Redirection/Redirection";
import { SignUp } from "../pages/SignUp";
import { TravelCommunty } from "src/pages/TravelCommunty";
import { Main } from "src/pages/Main";

import { Mypage } from "src/pages/Mypage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route exact path='/kakao/callback' element={<Redirection />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/travelcommunity' element={<TravelCommunty />} />
        <Route path='/main' element={<Main />} />
        
        <Route path='/mypage' element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};