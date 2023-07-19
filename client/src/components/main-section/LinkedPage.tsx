import { styled } from "styled-components";
import { ReactComponent as FrontEnd } from '../../assets/frontend.svg';
import { ReactComponent as BackEnd } from '../../assets/backend.svg';
import { ReactComponent as Notice } from '../../assets/notice.svg';
import { Link } from "react-router-dom";

const LinkedPage = () => {
  return (
    <Container>
      <Wrap>
        <CardsWrap>
          <Link to='/'>
            <Cards>
              <FrontEnd />
            </Cards>
            <WrapTxt>
              <p>FrontEnd</p>
            </WrapTxt>
          </Link>
        </CardsWrap>

        <CardsWrap>
          <Link to='/'>
            <Cards>
              <BackEnd />
            </Cards>
            <WrapTxt>
              <p>BackEnd</p>
            </WrapTxt>
          </Link>
        </CardsWrap>

        <CardsWrap>
          <Link to='/'>
            <Cards>
              <Notice />
            </Cards>
            <WrapTxt>
              <p>Notice</p>
            </WrapTxt>
          </Link>
        </CardsWrap>
      </Wrap>
    </Container>
  );
};

export default LinkedPage;

const Container = styled.div`
  display: flex;
  width: 75rem;
  justify-content: space-between;
  align-items: center;
`;

const Wrap = styled(Container)`
  flex-shrink: 0;
`;

const CardsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Cards = styled.div`
  display: flex;
  width: 18.75rem;
  height: 18.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: #E3E3E3;

  &:hover {
    background: #c8c8c8;
    transition: background 0.4s ease;
  }
`;

const WrapTxt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .25rem;
  align-self: stretch;

  p {
    align-self: stretch;
    color: #1A191E;
    font-size: 1.8125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: -.0375rem;
    margin-top: 1rem;
  }
`;