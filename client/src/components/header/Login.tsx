import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Login = () => {
  return (
    <Container>
      <Link to='/'>
        <Button>Login</Button>
      </Link>
      
      <Link to='/'>
        <Button>Join</Button>
      </Link>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
`;

const Button = styled.div`
  height: 2.25rem;
  display: flex;
  align-items: center;
  padding: 0rem .875rem 0rem .875rem;
  font-weight: 800;
  border-radius: 1.125rem;
  opacity: 0.8;
  margin-left: 0.625rem;
  font-size: .875rem;
  background: transparent;
  color: rgb(255, 255, 255);

  &:hover {
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.4s ease 0s;
  }
`;