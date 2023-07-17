import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/logo-icon.svg";

const Logo = () => {
  return (
    <Container>
      <Link to='/'>
        <LogoIcon width={104} height={56} />
      </Link>
    </Container>
  );
};

export default Logo;

const Container = styled.div`
  display: flex;
  align-items: center;
`;