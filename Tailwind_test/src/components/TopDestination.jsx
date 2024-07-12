import React from "react";
import styled from "styled-components";

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

const TopDestinations = () => (
  <DestinationsSection>
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
