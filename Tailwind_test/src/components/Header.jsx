import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f8f9fa;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 18px;
`;

const Header = () => (
  <HeaderContainer>
    <Logo>Jeju Island</Logo>
    <Nav>
      <NavLink href="#">Explore</NavLink>
      <NavLink href="#">My Tours</NavLink>
      <NavLink href="#">Join Now</NavLink>
      <NavLink href="#">Log In</NavLink>
    </Nav>
  </HeaderContainer>
);

export default Header;
