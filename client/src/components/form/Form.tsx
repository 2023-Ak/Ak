import { styled } from "styled-components";

import FormTitle from "./FormTitle";
import { ReactComponent as KaKaoIcon } from "../../assets/kakao-icon.svg";
import { ReactComponent as NaverIcon } from "../../assets/naver-icon.svg";

const Form = () => {
  return (
    <Container>
      <FormTitle title="회원가입" />
      <Input placeholder="이름을 입력해주세요" />
      <Input placeholder="닉네임을 입력해주세요" />
      <Input placeholder="이메일을 입력해주세요" />
      <Input placeholder="비밀번호를 입력해주세요" />
      <Input placeholder="비밀번호를 다시 한번 입력해주세요" />
      <ButtonDiv>
        <JoinBtn>회원가입</JoinBtn>
        <KaKaoJoinBtn>
          <KaKaoIcon />
          <span>가입</span>
        </KaKaoJoinBtn>
        <NaverJoinBtn>
          <NaverIcon />
          <span>가입</span>
        </NaverJoinBtn>
      </ButtonDiv>
    </Container>
  );
};

export default Form;

const Container = styled.form`
  display: flex;
  width: 37.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 1rem;
`;

const Input = styled.input`
  display: flex;
  width: 20rem;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.375rem;
  border: 2px solid #c8c8c8;
  background: #f0f0f0;
  color: #b0b0b0;
  font-family: DM Sans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 1.125rem */
  letter-spacing: -0.03375rem;
`;

const ButtonDiv = styled.div`
  display: flex;
  width: 20rem;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
`;

const JoinBtn = styled.button`
  display: flex;
  width: 5.875rem;
  height: 2.8125rem;
  /* padding: 1rem 1.5rem; */
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 0.375rem;
  background: #7397d3;
  font-family: DM Sans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 1.125rem */
  letter-spacing: -0.03375rem;
  cursor: pointer;
`;

const KaKaoJoinBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-sizing: border-box;
  width: 5.625rem;
  height: 2.8125rem;
  flex-shrink: 0;
  background-color: #fee500;
  border-radius: 0.375rem;
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.9375rem;
`;

const NaverJoinBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  box-sizing: border-box;
  width: 7.6875rem;
  height: 2.8125rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  background-color: #03c75a;
  color: var(--naver-text, #fff);
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 1.125rem */
`;
