import { styled } from "styled-components";
import Login from "./Login";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = (props: any) => {
  return (
    <Container>
      <Wrap>
        <InnerWrap>
          <Logo />

          <Navbar />

          <Login />
        </InnerWrap>
      </Wrap>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  left: 0rem;
  top: 0rem;
  right: 0rem;
  z-index: 10;
  background-color: #ffffff97;
`;

const Wrap = styled.div`
  position: relative;
  background-color: transparent;
`;

const InnerWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 4rem;
  width: 100%;
  color: rgb(255, 255, 255);
`;