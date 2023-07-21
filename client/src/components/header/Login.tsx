import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Login = () => {
  return (
    <Container>
      <Wrap>
        <Text to='/'>Login</Text>
        <Text to='/join'>Join</Text>
      </Wrap>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  width: 25rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 2rem;
  flex-shrink: 0;
  align-self: stretch;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`;

const Text = styled(Link)`
  color: #000;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -.0338rem;

  &:hover {
    color: rgba(0, 0, 0, 0.5);
    transition: color 0.4s ease 0s;
  }
`;