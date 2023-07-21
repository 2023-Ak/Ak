import { styled } from "styled-components";

const FormTitle = (props: any) => {
  return (
    <>
      <Title>{props.title}</Title>
    </>
  );
};
export default FormTitle;

const Title = styled.h2`
  font-family: DM Sans;
  font-size: 3.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 3.4375rem */
  letter-spacing: -0.09375rem;
  margin-bottom: 1rem;
`;
