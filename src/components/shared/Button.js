import React from "react";
import styled, { ThemeProvider } from "styled-components";
import * as styleGuides from "./styleGuides";
import PropTypes from "prop-types";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${p => p.theme.height || "auto"};
  font-weight: ${p => p.theme.fweight};
  margin: ${p => p.theme.margin};
  color: ${p => (p.disabled && styleGuides.lightgray) || p.theme.color};
  font-size: ${p => p.theme.fontSize};
  width: ${p => p.theme.width};
  height: ${p => p.theme.height};
  padding: ${p => p.theme.padding};
  background-color: ${p => p.theme.bgc};
  border: 1px solid
    ${p => (p.disabled && styleGuides.lightgray) || p.theme.borderColor};
  border-radius: 3px;
  text-decoration: none;

  cursor: ${p => (p.disabled && "not-allowed") || `pointer`};

  &:hover {
    background: ${p => (p.disabled && "none") || p.theme.hoverbgc};
    transition: 0.3s;
    border: 1px solid ${p => (p.disabled && "none") || p.theme.hoverbc};
    color: ${p => (p.disabled && "none") || p.theme.hovercolor};
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: ${p => p.theme.bgc};
    border: 1px solid ${p => p.theme.borderColor};
    color: ${p => p.theme.color};
  }
`;

const ThemedButton = ({ theme, name, type, disabled, onClick }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button type={type} disabled={disabled} onClick={onClick}>
        {name}
      </Button>
    </ThemeProvider>
  );
};

ThemedButton.defaultProps = {
  theme: {},
  name: "default",
  type: "button",
  disabled: false,
  onClick: null
};

ThemedButton.propTypes = {
  theme: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default ThemedButton;
