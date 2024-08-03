import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import KakaoLoginPage from "./pages/KakaoLoginPage";
import KakaoAfterLoginPage from "./pages/KakaoAfterLoginPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route
            path="/api/v1/auth/buyer/kakao"
            element={<KakaoAfterLoginPage />}
          />
          <Route path="/kakao/login" element={<KakaoLoginPage />} />
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
