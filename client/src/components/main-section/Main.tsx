import { styled } from "styled-components";
import Left from "./Left";
import Right from "./Right";

const Main = () => {
  return (
    <Container>
      <Left />
      <Right />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  width: 75rem;
  align-items: center;
  gap: 9.375rem;
`;