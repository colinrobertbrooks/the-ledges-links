import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    background: url(/the-ledges-links/images/background.jpg) no-repeat center center fixed;
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
