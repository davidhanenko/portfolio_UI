import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    margin: 0 auto;
    --maxWidth: 1400px;
     --fontSize: 12rem;

    --bgDark: #252525;
    --orange: #f07807;
    --white: #f8f1f1;
  }

  html {
   box-sizing: border-box;
   font-size: 62.5%;
   scroll-behavior: smooth;
   overflow-x: hidden;
}

  body {
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
    background: var(--bgDark);
  }

  a {
    text-decoration: none;
  } 
`;

export default GlobalStyles;
