import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login/LoginPage";
import { Redirection } from "../pages/Redirection/Redirection";
import { SignUp } from "../pages/SignUp";
import { TravelCommunty } from "src/pages/TravelCommunty";

export const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route exact path='/kakao/callback' element={<Redirection />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path="travelcommunity" element={<TravelCommunty />} />
        </Routes>
      </BrowserRouter>
    );
  };
  