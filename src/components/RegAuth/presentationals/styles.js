import styled from "styled-components";
import * as styleGuides from "../../shared/styleGuides";
import { FlexContainer } from "../../shared/styles";

export const Form = styled.form`
  width: inherit;
  flex-direction: ${p => p.direction};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.padding || "1rem"};
  margin: ${p => p.margin};
  background-color: ${p => (p.red ? styleGuides.lightred : "#FFFFFF00")};
`;

export const FormBlock = styled(FlexContainer)`
  align-items: baseline;
  flex-direction: ${p => (p.column ? "column" : "row")};
  margin: 0.25rem;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${p => p.fontSize || "1rem"};
  font-weight: ${p => p.fontWeight || styleGuides.lighter};
  width: ${p => p.width || "inherit"};
  margin: ${p => p.margin};
  color: ${p => (p.disabled && styleGuides.lightgray) || p.color};
`;

export const Span = styled.span`
  font-weight: ${p => p.fontWeight || styleGuides.lighter};
  color: ${p => p.color};
`;

export const Input = styled.input`
  max-width: ${p => p.width};
  margin-top: 0.25rem;
  padding: 0 0 0 0.5rem;
  font-size: ${p => (p.big ? "1.5rem" : "1rem")};
  font-weight: ${styleGuides.light};
  height: ${p => (p.big ? "3rem" : "1.75rem")};
  border: ${p => (p.big ? "1" : "1px solid red")};
  outline: 0;
  border-bottom: ${p => p.border};
  appearance: ${p => p.appearance};

  &:focus {
    outline: none;
    background-color: ${styleGuides.extralightgray};
    border-bottom: none;
  }

  ::placeholder {
    font-weight: ${styleGuides.lighter};
    color: ${p =>
      (p.disabled && styleGuides.lightgray) || styleGuides.darkgray};
    font-size: 1.25rem;
  }
`;

export const ErrorBlock = styled.div`
  text-align: center;
`;

export const loginBtn = {
  margin: "1.25rem .5rem 0 1rem",
  color: "white",
  fontSize: "1rem",
  padding: "0rem 1rem",
  bgc: styleGuides.red,
  hoverbgc: "white",
  height: "2rem",
  hoverbc: styleGuides.red,
  hovercolor: styleGuides.red
};

export const signupBtn = {
  margin: "1.25rem .5rem 0 1rem",
  width: "100%",
  color: "white",
  fontSize: "1.5rem",
  padding: "0rem 1rem",
  bgc: styleGuides.red,
  hoverbgc: styleGuides.lightred,
  height: "3rem",
  hoverbc: styleGuides.red
};
