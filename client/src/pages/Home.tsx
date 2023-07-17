import { styled } from "styled-components";
import { ReactComponent as LogoIcon } from '../assets/logo-icon.svg';
import Background from '../assets/1689580798486.png';

const Home = () => {
  return (
    <Container>
      <Banner>
        <BannerInner>
          <LeftSection>
            <LogoIcon width={104} height={56} />
          </LeftSection>

          <RightSection />
        </BannerInner>
      </Banner>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: rgb(124, 157, 150);
`;

const Banner = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  user-select: none;
  touch-action: pan-y;
`;

const BannerInner = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  height: 24rem;
  margin-top: 4rem;
`;

const LeftSection = styled.div`
  position: absolute;
  left: 12rem;
  bottom: 10rem;
  max-width: 38.75em;
`;

const RightSection = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  height: 51.375em;
  background-size: cover;
  background-image: url(${Background});
  background-position: center;
`;