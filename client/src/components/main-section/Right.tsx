import { styled } from "styled-components";
import Background from '../../assets/background.png';

const Right = () => {
  return (
    <Container>
      <Img>
        <img src={Background} alt="" />
      </Img>
    </Container>
  );
};

export default Right;

const Container = styled.div`
  width: 34.6875rem;
  height: 34.6875rem;
  flex-shrink: 0;
`;

const Img = styled(Container)`
  border-radius: 3.125rem;
  background-color: lightgray 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;