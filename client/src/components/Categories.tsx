import { styled } from 'styled-components';

const Categories = () => {
  return (
    <Container>
      <Wrapper>
        <Grid>
          <p>Categories</p>
          <CategoriesWrap>
            <button>All</button>

            <button>FrontEnd</button>

            <button>BackEnd</button>

            <button>Concern/Story</button>

            <button>Issues</button>
          </CategoriesWrap>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 0px;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  p {
    text-align: center;
    color: #1a191e;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.03375rem;
  }
`;

const CategoriesWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  button {
    display: flex;
    padding: 0.25rem 0.625rem;
    align-items: flex-start;
    gap: 0.625rem;
    border-radius: 0.25rem;
    background-color: #f8f8f8;
    border: none;

    &:hover {
      background-color: #7f7f7f;
      color: #f8f8f8;
      transition: background-color .4s, color .4s;
    }
  }
`;