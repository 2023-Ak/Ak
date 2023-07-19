import { styled } from "styled-components";
import Main from "../components/main-section/Main";

const Home = () => {
  return (
    <Container>
      <Main />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  padding: 8rem 0rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;