import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <HomeAndNotice to='/'>HOME</HomeAndNotice>

      <Community to='/community'>COMMUNITY</Community>
      
      <HomeAndNotice to='/'>NOTICE</HomeAndNotice>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    font-weight: 700;
    text-decoration: none;
    color: #000;

    &:hover {
      color: rgba(0, 0, 0, 0.5);
      transition: color 0.4s ease 0s;
    }
  }
`;

const HomeAndNotice = styled(Link)`
  display: flex;
  padding: .5rem .5rem .5rem .75rem;
  align-items: center;
  background: #FFF;
`;

const Community = styled(Link)`
  display: flex;
  padding: .5rem .75rem;
  align-items: center;
  background: #fff;
`;