import { createGlobalStyle } from "styled-components";
import backgroundImg from "../images/background.jpg";

export const GlobalStyles = createGlobalStyle`
  html {
    background: url(${backgroundImg}) no-repeat center center fixed;
    background-size: cover;
  }

  body {
    background-color: transparent;
  }

  html,
  body,
  #root {
    height: 100%;
  }
`;
