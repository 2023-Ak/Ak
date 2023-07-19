import { styled } from "styled-components";
import Contents from "./Contents";

const Footer = () => {
  return (
    <Container>
      <Line />
      <Contents />
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0rem;
  align-items: center;
  gap: 6rem;
`;

const Line = styled.div`
  width: 100%;
  height: .0625rem;
  background: #e8e8e8;
`;