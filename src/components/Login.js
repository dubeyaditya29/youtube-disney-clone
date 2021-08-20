import styled from "styled-components";

export const Login = (props) => {
  return (
    <Container>
      <Content>
        <BgImage></BgImage>
        <CTA>
          <CtaLogoOne src="/images/cta-logo-one.svg"></CtaLogoOne>
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Disney+ Hotstar is available on the Google Play Store and Apple App
            Store for mobile and tablet applications and can be accessed at{" "}
            <Link>www.hotstar.com</Link>.
          </Description>
          <CtaLogoTwo src="/images/cta-logo-two.png"></CtaLogoTwo>
        </CTA>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  box-sizing: border-box;
  margin-bottom: 15vw;
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 90px 100px;
  height: 100%;
`;

const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  height: 100%;
  position: absolute;
  top: 15px;
  right: 0;
  left: 0;
  z-index: -1;
  opacity: 0.9;
`;
const CTA = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
const CtaLogoOne = styled.img`
  width: 600px;
  height: 15vh;
  margin-bottom: 15px;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  height: 12vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vh;
  cursor: pointer;
  margin-bottom: 15px;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.div`
  font-weight: bold;
  font-size: 2vh;
  margin-bottom: 15px;
`;
const Link = styled.a`
  font-weight: bold;
  font-size: 2vh;
  color: #0483ee;
  cursor: pointer;
  &:hover {
    color: #00008b;
    cursor: pointer;
  }
`;

const CtaLogoTwo = styled.img`
  width: 100%;
`;
