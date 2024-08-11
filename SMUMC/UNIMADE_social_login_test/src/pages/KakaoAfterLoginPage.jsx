//KakaoAfterLogin 이 부분에서는 code를 받고 post 요청하는 코드 이거는 그냥 로그인 로직인데 저희 프로젝트에서는 responseDto의 status값에
// 따라서 토큰을 줄 수도 있고 회원정보를 줄 수도 있습니다.

import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://15.165.185.157:8080/";
// 단순 get요청으로 인증값이 필요없는 경우
const axiosApi = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};
const defaultInstance = axiosApi(BASE_URL);

let params = new URL(window.location.href).searchParams;
let code = params.get("code");
console.log(code);

const KakaoAfterLoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // const [userName, setUserName] = useRecoilState(userNameState);
  useEffect(() => {
    defaultInstance
      .post(`auth/buyers/kakao?code=${code}&fcmToken=${"123"}`)
      .then((response) => {
        console.log("asdfasdff");
        console.log(response);
        //setUserName(response.data.data.name);
        // localStorage 저장
        localStorage.setItem("access_token", response.data.result.access_token);
        localStorage.setItem(
          "refresh_token",
          response.data.result.refresh_token
        );
        console.log("메인으로 이동");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  //location, navigate, setUserName
};

export default KakaoAfterLoginPage;
