import styled from "styled-components";

export const Header = () => {
  return (
    <Navbar>
      <DisneyLogo>
        <Logo src="./images/logo.svg"></Logo>
      </DisneyLogo>
      <NavbarMenu></NavbarMenu>
      <LoginButton>
        <SpanElement>Login</SpanElement>
      </LoginButton>
    </Navbar>
  );
};
const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  background-color: #090b13;
  justify-content: space-between;

  z-index: 3;
`;
const Logo = styled.img`
  width: 100%;
  padding: 3vh;
  max-height: 90px;
`;
const DisneyLogo = styled.a`
  margin: 0;
  padding: 0;
  cursor: pointer;
`;
const LoginButton = styled.a`
  font-weight: bold;
  letter-spacing: 2px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const SpanElement = styled.span`
  border: 2px solid #f9f9f9;
  padding: 10px 15px;
  border-radius: 10px;
`;
const NavbarMenu = styled.div``;
