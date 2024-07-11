import React from "react";
import styled from "styled-components";

const AppPromoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #e9ecef;
`;

const PromoText = styled.p`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

const PromoButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const AppPromo = () => (
  <AppPromoSection>
    <PromoText>Get our app for exclusive discounts!</PromoText>
    <PromoButton>Get the App</PromoButton>
  </AppPromoSection>
);

export default AppPromo;
