import { styled } from 'styled-components';

import { ReactComponent as FrontEnd } from '../../assets/label-frontend-icon.svg';
import { ReactComponent as BackEnd } from '../../assets/label-backend-icon.svg';
import { ReactComponent as ConernStory } from '../../assets/label-concern-icon.svg';

const Content = () => {
  const columns = [{name: 'FrontEnd', Comp: FrontEnd}, {name: 'BackEnd', Comp: BackEnd}, {name: 'Concern/Story', Comp: ConernStory}]

  return (
    <>
      {columns.map((column) => (
        <Grids>
          <GridLabel>
            <LabelImg>
              <column.Comp />
            </LabelImg>

            <Label key={column.name}>{column.name}</Label>
          </GridLabel>

          <ContentWrap>
            <Contents>
              <p>임시사항</p>
            </Contents>
            <p>태그</p>
          </ContentWrap>
          <Line />

          <ContentWrap>
            <Contents>
              <p>임시사항</p>
            </Contents>
            <p>태그</p>
          </ContentWrap>
          <Line />

          <ContentWrap>
            <Contents>
              <p>임시사항</p>
            </Contents>
            <p>태그</p>
          </ContentWrap>
          <Line />

          <ContentWrap>
            <Contents>
              <p>임시사항</p>
            </Contents>
            <p>태그</p>
          </ContentWrap>
        </Grids>
      ))}
    </>
  );
};

export default Content;


const Grids = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;
  margin: 5rem 0rem;
  width: 56.25rem;
`;

const GridLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  align-self: stretch;
`;

const LabelImg = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  background: #F1F1F1;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const Label = styled.p`
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.0525rem;
  margin-top: .3125rem;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;

  p {
    align-self: stretch;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
    color: rgba(26, 25, 30, 0.50);
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  align-self: stretch;

  p {
    flex: 1 0 0;
    color: #1a191e;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: -0.0375rem;
  }
`;

const Line = styled.div`
  height: 0.0625rem;
  align-self: stretch;
  background-color: #e8e8e8;
`;