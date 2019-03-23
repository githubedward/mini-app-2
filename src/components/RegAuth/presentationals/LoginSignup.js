import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import WelcomeText from "./WelcomeText";
import bg from "../../../assets/winteradv.jpg";
import { FlexContainer } from "../../shared/styles";
import styled from "styled-components";

export const StyledPage = styled.div`
  height: 100vh;
  width: 100vw;

  background-image: url(${bg});
  background-origin: center;
  background-size: cover;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContainer = styled(FlexContainer)`
  width: 100%;
  height: 100%;
`;

export const FormContainer = styled(FlexContainer)`
  background-color: ${p => p.bgColor};
  flex-direction: column;
  box-shadow: 0px 0px 10px 2px rgba(209, 209, 209, 0.6);
  width: 500px;
`;

const LoginSignup = props => {
  return (
    <StyledPage>
      <StyledContainer>
        <WelcomeText />
      </StyledContainer>
      <StyledContainer>
        <FormContainer bgColor="#FFFFFF70">
          <LoginForm {...props} />
          <SignupForm {...props} />
        </FormContainer>
      </StyledContainer>
    </StyledPage>
  );
};

export default LoginSignup;
