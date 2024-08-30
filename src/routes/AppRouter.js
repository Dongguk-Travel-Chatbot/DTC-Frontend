import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login/LoginPage";
import { Redirection } from "../pages/Redirection/Redirection";
import { SignUp } from "../pages/SignUp";
import { TravelCommunity } from "src/pages/TravelCommunity";
import { Main } from "src/pages/Main";
import { Community } from "src/pages/Community";
import { Mypage } from "src/pages/Mypage";
import { MypageEdit } from "src/pages/MypageEdit";
import { TravelRecordPage } from "src/pages/TravelRecord";
import { TravelPlanPage } from "src/pages/TravelPlan";
import { TravelPost } from "src/pages/TravelPost";
import { FreePost } from "src/pages/FreePost";
import { FreeCommunity } from "src/pages/FreeCommunity";
import { HotCommunity } from "src/pages/HotCommunity";
import { PostDetails } from "src/pages/TravelCommunityInfo";
import { TravelClip } from "src/pages/TravelClip";
import { ChatAiTravel } from "src/pages/ChatAiTravel";

export const AppRouter = () => {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route exact path='/kakao/callback' element={<Redirection />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/travelCommunity' element={<TravelCommunity />} />
          <Route path='/main' element={<Main />} />
          <Route path='/community' element={<Community />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/mypage-edit' element={<MypageEdit />} />
          <Route path='/travel-record' element={<TravelRecordPage />} />
          <Route path='/travel-plan' element={<TravelPlanPage />} />
          <Route path='/travel-post' element={<TravelPost />} />
          <Route path='/TravelClip' element={<TravelClip />} />
          <Route path='/freeCommunity' element={<FreeCommunity />} />
          <Route path='/hotCommunity' element={<HotCommunity />} />
          <Route path='/free-post' element={<FreePost />} />
          <Route path="/post-details/:category/:id" element={<PostDetails />} />
          <Route path="/100" element={<ChatAiTravel />} />
        </Routes>
      </BrowserRouter>
    );
  };
