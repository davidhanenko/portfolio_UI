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
    --maxWidth: 1600px;

    --headerHeight: 10rem;


    --dark: #252525;
    --dark2: #373737;
    --gray: #4b4b4b;
    --lightGray: #c4c4c4;
    --lightOrange: #ff9001;
    --orange: #ff6600;
    
    --white: #f8f1f1;
    --offWhite: #f5f5f5;
    --textDark: #1e1a1a;
    --bgDarkOpacity: rgba(37, 37, 37, 0.7); 

  }

   @font-face {
    font-family: 'Montserrat', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Nunito:wght@200;300;400;600;700&display=swap');
    font-weight: normal;
    font-style: normal;
  }

  html {
   box-sizing: border-box;
   font-size: 62.5%;
   background: var(--dark);
}

  body {
    font-family: 'Nunito', sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
    background: var(--dark);

        font-stretch: ultra-expanded;
  }

  a {
    text-decoration: none;
  } 
`;

export default GlobalStyles;
