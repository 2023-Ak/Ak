import { styled } from "styled-components";
import Main from "../components/main-section/Main";
import LinkedPage from "../components/main-section/LinkedPage";

const Home = () => {
  return (
    <Container>
      <Main />
      <LinkedPage />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  height: 66.5625rem;
  padding: 8rem 0rem;
  flex-direction: column;
  align-items: center;
  gap: 6.25rem;
  align-self: stretch;
`;