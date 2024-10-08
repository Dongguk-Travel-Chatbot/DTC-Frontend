import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { LoginPage } from "../pages/Login/LoginPage";
import { Redirection } from "../pages/Redirection/Redirection";
import { SignUp } from "src/pages/SignUp";
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
import { PostDetails } from "src/pages/PostDetails";
import { TravelClip } from "src/pages/TravelClip";
import { ChatAiTravel } from "src/pages/ChatAiTravel";
import { TravelMakeBasic } from "src/pages/TravelMakeBasic";
import { Travelmakecallender } from "src/pages/Travelmakecallender/Travelmakecallender";
import { TravelMakeMember } from "src/pages/TravelMakeMember";
import { TravelMakeFInal } from "src/pages/TravelMakeFInal";
import { AnimatePresence, motion } from "framer-motion";
import { TravelDetailCreate } from "src/pages/TravelDetailCreate";
import { KakaoMap } from "src/pages/KakaoMap";

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                
                {/* 애니메이션 미적용 경로 */}
                <Route path="/" element={<LoginPage />} />
                <Route exact path='/kakao/callback' element={<Redirection />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/main' element={<Main />} />
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/mypage-edit' element={<MypageEdit />} />
                <Route path='/travel-record' element={<TravelRecordPage />} />
                <Route path='/travel-plan' element={<TravelPlanPage />} />
                <Route path='/travel-post' element={<TravelPost />} />
                <Route path='/travel-clip' element={<TravelClip />} />
                <Route path='/free-post' element={<FreePost />} />
                <Route path='/community' element={<Community />} /> 
                <Route path="/aichat" element={<ChatAiTravel />} />
                {/* 애니메이션 적용 경로 */}
                <Route path='/free-community' element={<PageTransition><FreeCommunity /></PageTransition>} />
                <Route path='/hot-community' element={<PageTransition><HotCommunity /></PageTransition>} />
                <Route path='/travel-community' element={<PageTransition><TravelCommunity /></PageTransition>} />
                <Route path="/travel-make-basic" element={<PageTransition><TravelMakeBasic /></PageTransition>} />
                <Route path="/travel-callender" element={<PageTransition><Travelmakecallender /></PageTransition>} /> 
                <Route path="/travel-make-member" element={<PageTransition><TravelMakeMember /></PageTransition>} />
                <Route path="/travel-make-final" element={<PageTransition><TravelMakeFInal /></PageTransition>} />
                <Route path="/post-details/:category/:id" element={<PageTransition><PostDetails /></PageTransition>} />
                <Route path="/record-detail/:travelId" element={<PageTransition><TravelDetailCreate /></PageTransition>} />
                <Route path="/kakaomap/:detailId" element={<PageTransition><KakaoMap /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
};

// 페이지 전환 시 슬라이드 애니메이션을 적용하는 컴포넌트
const PageTransition = ({ children }) => (
    <motion.div
        initial={{ x: "100%" }} // 새 페이지가 오른쪽에서 시작
        animate={{ x: 0 }} // 제자리로 슬라이드
        exit={{ x: "-100%" }} // 이전 페이지는 왼쪽으로 슬라이드 아웃
        transition={{ duration: 0.2 }} // 애니메이션 지속 시간
        style={{ position: "absolute", width: "100%" }} // 페이지를 겹치게 배치
    >
        {children}
    </motion.div>
);

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    );
};
