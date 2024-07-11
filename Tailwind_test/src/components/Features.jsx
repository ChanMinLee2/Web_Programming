import React from "react";
import styled from "styled-components";

const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #f1f3f5;
  width: calc(100vw - 17px);
`;

const FeatureCard = styled.div`
  width: 150px;
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

const FeatureText = styled.p`
  font-size: 16px;
`;

const Features = () => (
  <FeaturesSection>
    <FeatureCard>
      <FeatureIcon>⭐</FeatureIcon>
      <FeatureText>Best Price Guarantee</FeatureText>
    </FeatureCard>
    <FeatureCard>
      <FeatureIcon>🔄</FeatureIcon>
      <FeatureText>Cancellation Policy</FeatureText>
    </FeatureCard>
    <FeatureCard>
      <FeatureIcon>🛡️</FeatureIcon>
      <FeatureText>Covid-19 Updates</FeatureText>
    </FeatureCard>
  </FeaturesSection>
);

export default Features;
