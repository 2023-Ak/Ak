import { styled } from "styled-components";
import { ReactComponent as LogoIcon } from '../assets/logo-icon.svg';
import { ReactComponent as Arrow } from '../assets/arrow.svg';
import Background from '../assets/background.png';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Banner>
        <BannerInner>
          <LeftSection>
            <LogoIcon width={120} height={72} />
          </LeftSection>
        </BannerInner>
      </Banner>

      <BottomSection>
        <FeSection>
          <h1>FrontEnd</h1>
          <Link to='/'>
            <Arrow width={30} height={30} />
          </Link>
        </FeSection>

        <BeSection>
          <h1>BackEnd</h1>
          <Link to='/'>
            <Arrow width={30} height={30} />
          </Link>
        </BeSection>

        <Notice>
          <h1>Notice</h1>
          <Link to='/'>
            <Arrow width={30} height={30} />
          </Link>
        </Notice>

      </BottomSection>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: #ffffffba;
  position: relative;
  height: 100%;
`;

const Banner = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  user-select: none;
  touch-action: pan-y;
  height: 100%;
`;

const BannerInner = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  height: 24rem;
  margin-top: 4rem;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
`;

const LeftSection = styled.div`
  position: absolute;
  left: 12rem;
  bottom: 10rem;
  max-width: 38.75em;
`;

const BottomSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const FeSection = styled.div`
  width: 30.75rem;
  height: 16.25rem;
  background-color: rgb(238, 207, 185);
  border-radius: 1.5625rem;
  margin: 5rem 1rem 1rem 1rem;
  position: relative;

  h1 {
    margin: 1rem 0rem 0rem 1rem;
    font-weight: 700;
    font-size: 1.25rem;
  }

  svg {
    position: absolute;
    top: 14.2rem;
    left: 18.5rem;
  }
`;

const BeSection = styled(FeSection)`
  background-color: rgb(184, 191, 255);
`;

const Notice = styled(FeSection)`
  background-color: rgb(146, 213, 225);
`;