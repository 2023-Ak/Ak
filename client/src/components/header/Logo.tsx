import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/logo-icon.svg";

const Logo = () => {
  return (
    <Container>
      <Link to='/'>
        <LogoIcon width={59} height={32} />
      </Link>
    </Container>
  );
};

export default Logo;

const Container = styled.div`
  display: flex;
  width: 25rem;
  align-items: center;
  gap: .625rem;
  flex-shrink: 0;
  align-self: stretch;
`;