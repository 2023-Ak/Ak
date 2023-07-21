import { styled } from 'styled-components';

import Content from './Content';

const Default = () => {
  return (
    <Container>
      <Wrapper>
        <Content />
      </Wrapper>
    </Container>
  );
};

export default Default;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  gap: 8rem; 
  margin: 0rem 20rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  flex: 1 0 0;
`;