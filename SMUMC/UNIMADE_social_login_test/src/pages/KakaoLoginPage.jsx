import React from "react";

function KakaoLoginPage() {
  const loginUrl = `http://15.165.185.157:8080/oauth2/authorization/kakao`;

  const handleLogin = () => {
    window.location.href = loginUrl;
  };

  return (
    <>
      <div>
        <img src="" alt="Login with Kakao" onClick={handleLogin} />
      </div>
    </>
  );
}

export default KakaoLoginPage;
