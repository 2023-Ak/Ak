import { styled } from 'styled-components';

import Slide from '../components/Slide';
import Categories from '../components/Categories';
import Default from '../components/contents/Default';

const Community = () => {
  return (
    <Container>
      <Slide />
      <Categories />
      <Default />
    </Container>
  );
};

export default Community;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;