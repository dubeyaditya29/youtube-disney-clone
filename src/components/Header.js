import styled from "styled-components";
import { auth, provider } from "../firebase";
export const Header = () => {
  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  return (
    <Navbar>
      <DisneyLogo>
        <Logo src="./images/logo.svg"></Logo>
      </DisneyLogo>
      <NavbarMenu>
        <Home href="/home">
          <HomeImage src="/images/home-icon.svg"></HomeImage>
          <span>HOME</span>
        </Home>
        <Home href="/search">
          <HomeImage src="/images/search-icon.svg"></HomeImage>
          <span>SEARCH</span>
        </Home>
        <Home href="/orignals">
          <HomeImage src="/images/original-icon.svg"></HomeImage>
          <span>ORIGNALS</span>
        </Home>
        <Home href="/movies">
          <HomeImage src="/images/movie-icon.svg"></HomeImage>
          <span>MOVIES</span>
        </Home>
      </NavbarMenu>
      <LoginButton onClick={handleAuth}>
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
  padding-top: 10px;
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
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: #f9f9f9;
    color: black;
  }
`;
const NavbarMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
  margin-right: auto;
  margin-left: 25px;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Home = styled.a`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  height: 20px;
  span {
    margin-left: 10px;
    margin-top: 3px;
    margin-right: 10px;
  }
`;
const HomeImage = styled.img``;
