import { Link } from "react-router-dom";
import { styled } from "styled-components";

const LinkedPage = () => {
  return (
    <Container>
      <Wrap>
        <Title>
          <Link to='/' style={{color: '#1a191e'}}>
            HOME
          </Link>
        </Title>
      </Wrap>
      
      <Wrap>
        <Title>COMMUNITY</Title>
        <Docs>
          <LinkTxt to='/'>FrontEnd</LinkTxt>
          <LinkTxt to='/'>BackEnd</LinkTxt>
          <LinkTxt to='/'>Notice</LinkTxt>
        </Docs>
      </Wrap>

      <Wrap>
        <Title>SOCIAL MEDIA</Title>
        <Docs>
          <LinkTxt to='/'>육동영</LinkTxt>
          <LinkTxt to='/'>정부영</LinkTxt>
          <LinkTxt to='/'>황재진</LinkTxt>
          <LinkTxt to='/'>신화영</LinkTxt>
          <LinkTxt to='/'>모유빈</LinkTxt>
        </Docs>
      </Wrap>
    </Container>
  );
};

export default LinkedPage;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  flex: 1 0 0;
`;

const Wrap = styled(Container)`
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

const Title = styled.div`
  color: #1a191e;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -.0338rem;
`;

const Docs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  margin-bottom: 2rem;
`;

const LinkTxt = styled(Link)`
  font-size: .875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  color: rgba(26, 25, 30, 0.50);
  text-decoration: none;
`;