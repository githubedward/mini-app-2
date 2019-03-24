import React from "react";
import LoginForm from "./Forms/LoginForm";
import SignupForm from "./Forms/SignupForm";
import bg from "../../assets/path.jpg";
import { FlexContainer } from "../shared/styles";
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

// export const StyledContainer = styled(FlexContainer)`
//   width: 100%;
//   height: 100%;
// `;

export const FormContainer = styled(FlexContainer)`
  background-color: ${p => p.bgColor};
  flex-direction: column;
  box-shadow: 0px 0px 5px 2px rgba(209, 209, 209, 0.6);
  width: 500px;
  /* border-radius: 10px; */
`;

const LoginSignup = props => {
  return (
    <StyledPage>
      {/* <StyledContainer> */}
      <FormContainer bgColor="rgba(256, 256, 256, 0.75)">
        <LoginForm {...props} />
        <SignupForm {...props} />
      </FormContainer>
      {/* </StyledContainer> */}
    </StyledPage>
  );
};

export default LoginSignup;
