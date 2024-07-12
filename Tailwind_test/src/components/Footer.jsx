import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #343a40;
  color: #fff;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: #adb5bd;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color: #fff;
  }
`;

const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewsletterInput = styled.input`
  padding: 10px;
  margin-top: 10px;
  font-size: 14px;
`;

const Footer = () => (
  <FooterContainer>
    <FooterLinks>
      <FooterLink href="#">About Us</FooterLink>
      <FooterLink href="#">Contact Us</FooterLink>
      <FooterLink href="#">Privacy Policy</FooterLink>
    </FooterLinks>
    <Newsletter>
      <span>Subscribe to our newsletter</span>
      <NewsletterInput type="email" placeholder="Enter your email" />
    </Newsletter>
  </FooterContainer>
);

export default Footer;
