import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-color: #e9ecef;
`;

const HeroText = styled.h1`
  font-size: 36px;
  text-align: center;
`;

const Hero = () => (
  <HeroSection>
    <HeroText>Discover hidden gems with us</HeroText>
  </HeroSection>
);

export default Hero;
