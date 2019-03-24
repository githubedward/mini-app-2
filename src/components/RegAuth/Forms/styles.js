import styled from "styled-components";
import * as styleGuides from "../../shared/styleGuides";
import { FlexContainer } from "../../shared/styles";

export const Form = styled.form`
  flex-direction: ${p => p.direction};
  display: flex;
  justify-content: center;
  align-items: center;

  width: inherit;
  padding: ${p => (p.big && "2.5rem") || "1rem"};
  margin: ${p => p.margin};

  background-color: ${p => (p.solid ? "white" : "#FFFFFF00")};
  border: ${p => p.solid && `2px solid ${styleGuides.lightgray}`};
  /* border-radius: ${p => p.solid && "10px 10px 0 0"}; */
`;

export const FormBlock = styled(FlexContainer)`
  align-items: baseline;
  flex-direction: ${p => (p.column ? "column" : "row")};

  margin: ${p => p.big && `.5rem` || `0 0.25rem`};
  width: ${p => p.big && "100%"};
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${p => p.fontSize || "1rem"};
  font-weight: ${p => p.fontWeight || styleGuides.lighter};

  width: ${p => p.width || "inherit"};
  margin: ${p => p.margin};
  color: ${styleGuides.darkgray};
`;

export const Span = styled.span`
  font-weight: ${p => p.fontWeight || styleGuides.lighter};
  color: ${p => p.color};
`;

export const H2 = styled.h1`
  color: ${styleGuides.darkgray};
  font-weight: ${p => p.fontWeight || styleGuides.lighter};
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  width: ${p => p.big && "100%"};
  /* margin: 0.25rem 0; */
  padding: 0 0 0 0.5rem;

  color: ${styleGuides.superdarkgray};
  font-size: ${p => (p.big ? "1.5rem" : ".95rem")};
  font-weight: ${styleGuides.light};
  height: ${p => (p.big ? "3rem" : "1.75rem")};
  border: ${p =>
    `1px solid 
   ${p.border || (!p.big && styleGuides.gray) || styleGuides.lightgray}`};
  outline: 1;
  appearance: ${p => p.appearance};
  border-radius: ${p => p.big && "5px"};
  /* background-color: ${p => p.big && `rgba(256, 256, 256, 0.7)`}; */

  &:focus {
    outline: none;
    /* background-color: ${p =>
      (p.big && styleGuides.extralightgray) || styleGuides.lightgray}; */
    /* border: ${p => p.big && `1px solid ${styleGuides.lightred}`}; */
    border: 1px solid ${styleGuides.lightred};
  }

  ::placeholder {
    font-weight: ${styleGuides.lighter};
    color: ${styleGuides.darkgray};
    font-size: 1.25rem;
  }
`;

export const ErrorBlock = styled.div`
  text-align: center;
  /* background-color: ${styleGuides.red}; */
`;

export const loginBtn = {
  margin: "1rem .5rem 0 1rem",
  color: styleGuides.darkgray,
  fontSize: "1rem",
  padding: "0rem 1rem",
  bgc: "white",
  borderColor: styleGuides.gray,
  hoverbgc: styleGuides.lightred,
  height: "2rem",
  hoverbc: styleGuides.lightred,
  hovercolor: "white"
};

export const signupBtn = {
  margin: "2.5rem 0 0 0",
  width: "100%",
  color: "white",
  fontSize: "1.5rem",
  padding: "0rem 1rem",
  borderColor: styleGuides.blue,
  bgc: styleGuides.blue,
  hoverbgc: styleGuides.red,
  height: "3rem",
  hoverbc: styleGuides.red
};
