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

    --bgDark: #000;
    --orange: #ffa500;
  }

  html {
   box-sizing: border-box;
   font-size: 62.5%;
   scroll-behavior: smooth;
   overflow-x: hidden;
}

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    scroll-behavior: smooth;
    background: var(--bgDark);
  }

  a {
    text-decoration: none;
  } 
`;

export default GlobalStyles;
