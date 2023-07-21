import { styled } from "styled-components";
import Login from "./Login";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = (props: any) => {
  return (
    <Container>
      <Wrap>
        <Logo />
        <Navbar />
        <Login />
      </Wrap>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  padding: 1.5rem 0rem;
  flex-direction: column;
  align-items: center;
  gap: .625rem;
  background-color: #fff;
`;

const Wrap = styled.div`
  display: flex;
  width: 87.5rem;
  justify-content: space-between;
  align-items: center;
`;