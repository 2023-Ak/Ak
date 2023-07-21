import { styled } from "styled-components";
import { ReactComponent as LogoIcon } from '../../assets/logo-icon.svg';
import LinkedPage from "./LinkedPage";

const Contents = () => {
  return (
    <Container>
      <Wrap>
        <LogoIcon />
        
        <LinkedPage />
      </Wrap>
    </Container>
  );
};

export default Contents;

const Container = styled.div`
  display: flex;
  width: 87.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 5rem;
`;

const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18.75rem;
  align-self: stretch;
`;
