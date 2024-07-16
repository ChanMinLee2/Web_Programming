import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
// import kakao from "//dapi.kakao.com/v2/maps/sdk.js?appkey=57a6f20d01d5010df5d5a999cdd7b847";\\

const DestinationsSection = styled.section`
  padding: 20px;
`;

const DestinationsGrid = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DestinationCard = styled.div`
  width: 200px;
  height: 150px;
  background-color: #dee2e6;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
`;

function Kakao() {
  const { kakao } = window;
  useEffect(() => {
    var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    console.log(container);
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    var ps = new kakao.maps.services.Places();

    // 키워드로 장소를 검색합니다
    ps.keywordSearch("hotel", (data, status, pagination) => {
      console.log(data, status, pagination);
    });
  }, []);

  return <div id="map" style={{ width: "100%", height: "350px" }}></div>;
}

const TopDestinations = () => (
  <DestinationsSection>
    <Kakao />
    <h2>Top Destinations</h2>
    <DestinationsGrid>
      <DestinationCard>
        Udo Island
        <br />
        From $50
      </DestinationCard>
      <DestinationCard>
        Seongsan Ilchulbong
        <br />
        From $60
      </DestinationCard>
      <DestinationCard>
        Jeju Folk Village
        <br />
        From $55
      </DestinationCard>
    </DestinationsGrid>
  </DestinationsSection>
);

export default TopDestinations;
