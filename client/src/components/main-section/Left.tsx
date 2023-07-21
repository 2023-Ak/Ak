import { styled } from "styled-components";

import { ReactComponent as LogoIcon } from '../../assets/logo-icon.svg';

const Left = () => {
  return (
    <Grid>
      <InnerGird>
        <Wrap>
          <Title>
            <LogoIcon width={200} height={100} />
          </Title>
          <Docs>
            슈퍼코딩 커뮤니티
          </Docs>
        </Wrap>
      </InnerGird>
    </Grid>
  );
};

export default Left;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
`;

const InnerGird = styled(Grid)`
  gap: 2rem;
`;

const Wrap = styled(Grid)`
  gap: 1rem;
`;

const Title = styled.div`
  color: #1A191E;
  font-size: 6.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -.1875rem;
`;

const Docs = styled.div`
  width: 37.5rem;
  color: #1A191E;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
`;