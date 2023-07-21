import { styled } from 'styled-components';

const Slide = () => {
  return (
    <Container>
      <Wrapper>
        <Grid>
          <Column>
            <Cards>
              <CardsInnerGrid>
                <TitleWrap>제목</TitleWrap>

                <ContentsWrap>
                  내용
                  <Date>
                    년/월/일
                  </Date>
                </ContentsWrap>
              </CardsInnerGrid>
            </Cards>

            <Cards>
              <CardsInnerGrid>
                <TitleWrap>제목</TitleWrap>

                <ContentsWrap>
                  내용
                  <Date>
                    년/월/일
                  </Date>
                </ContentsWrap>
              </CardsInnerGrid>
            </Cards>

            <Cards>
              <CardsInnerGrid>
                <TitleWrap>제목</TitleWrap>

                <ContentsWrap>
                  내용
                  <Date>
                    년/월/일
                  </Date>
                </ContentsWrap>
              </CardsInnerGrid>
            </Cards>

            <Cards>
              <CardsInnerGrid>
                <TitleWrap>제목</TitleWrap>

                <ContentsWrap>
                  내용
                  <Date>
                    년/월/일
                  </Date>
                </ContentsWrap>
              </CardsInnerGrid>
            </Cards>

            <Cards>
              <CardsInnerGrid>
                <TitleWrap>제목</TitleWrap>

                <ContentsWrap>
                  내용
                  <Date>
                    년/월/일
                  </Date>
                </ContentsWrap>
              </CardsInnerGrid>
            </Cards>
          </Column>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Slide;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-radius: .5rem;
`;

const Grid = styled.div`
  display: flex;
  padding: 2rem 0rem;
  align-items: flex-start;
  align-self: stretch;
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex: 1 0 0;
  border-radius: .5rem;
`;

const Cards = styled.div`
  display: flex;
  width: 15.625rem;
  height: 15.625rem;
  padding: 1.2075rem;
  margin: auto;
  flex-direction: column;
  align-items: center;
  border-radius: .45281rem;
  background: linear-gradient(134deg, #383838 0%, #787878 100%);;
`;

const CardsInnerGrid = styled.div`
  display: flex;
  width: 12.67875rem;
  height: 6.64125rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`;

const TitleWrap = styled.div`
  display: flex;
  width: 12.52781rem;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  font-size: 0.966rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.029rem;
`;

const ContentsWrap = styled.div`
  display: flex;
  height: 6.50938rem;
  padding-top: 50px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8.5rem;
  flex-shrink: 0;
  color: #fff;
  font-size: 0.966rem;
  font-style: normal;
  line-height: 100%;
  letter-spacing: -0.029rem;
`;

const Date = styled.div`
  display: flex;
  width: 12.75806rem;
  height: 1.50938rem;
  align-items: center;
  gap: 4.64888rem;
  flex-shrink: 0;
`;