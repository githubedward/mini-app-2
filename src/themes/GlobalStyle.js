import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700");
  * {
    margin: 0px;
    padding: 0px;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
