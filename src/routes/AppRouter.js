import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login/LoginPage";
import { Redirection } from "../pages/Redirection/Redirection";
import { SignUp } from "../pages/SignUp";

export const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route exact path='/kakao/callback' element={<Redirection />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
  };
  