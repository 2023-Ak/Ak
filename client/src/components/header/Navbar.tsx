import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Link to='/'>HOME</Link>
      <Link to='/'>CUMMUNITY</Link>
      <Link to='/'>NOTICE</Link>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: relative;
  display: flex;
  transition: color 0.4s ease 0s;
  
  a {
    color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: .875rem;

    &:hover {
      border-bottom: 2px solid #fff;
      transition: border-bottom 0.4s ease 0s;
    }
  }

  a + a {
    margin-left: 1.5rem;
  }
`;