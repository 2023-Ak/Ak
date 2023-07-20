import { styled } from "styled-components";
import Form from "../components/form/Form";

const Join = () => {
  return (
    <Container>
      <Form />
    </Container>
  );
};

export default Join;

const Container = styled.div`
  display: flex;
  margin-top: 3rem;
  padding: 8rem 0rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;
