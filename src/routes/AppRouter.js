import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login/LoginPage";
import { Redirection } from "../pages/Redirection/Redirection";
import { SignUp } from "../pages/SignUp";
import { TravelCommunty } from "src/pages/TravelCommunty";
import { Main } from "src/pages/Main";
import { Community } from "src/pages/Community";
import { Mypage } from "src/pages/Mypage";
import { TravelRecordPage } from "src/pages/TravelRecord";

export const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route exact path='/kakao/callback' element={<Redirection />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/travelcommunity' element={<TravelCommunty />} />
          <Route path='/main' element={<Main />} />
          <Route path='/community' element={<Community />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/travel-record' element={<TravelRecordPage />} />
        </Routes>
      </BrowserRouter>
    );
  };
  