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

    --headerHeight: 8rem;


    --dark: #010410;
    --darkOp: #010410e5;
    --dark3:#0f172a;
    --dark4:#1e293b;
    --dark2: #343230;
    --gray: #7a7979;
    --grayOp: #7a797987;
    --lightGray: #bcbcbc;
    --lightGrayOp: #bcbcbcf1;
    --teal: #06b6d4;
    --teal1: #115e59;
    --teal2: #0d9488;
    
    --white: #f8f1f1;
    --offWhite: #f5f5f5;
    --textDark: #1e1a1a;
    --bgDarkOpacity: rgba(37, 37, 37, 0.7); 

    --gradient-gray1: linear-gradient(
    348deg,
    var(--gray) 0%,
    var(--dark) 90%
    );

     --gradient-gray2: linear-gradient(169deg, var(--grayOp) 60%, var(--paleteal1Op) 40%);

       --gradient-text: linear-gradient(
      90deg,var(--teal1) 20%, var(--teal2) 95%
    );

     --gradient-text1: linear-gradient(
      90deg,
      var(--teal) 20%,
      rgba(253, 187, 45, 1) 95%
    );

    --gradient-text2: linear-gradient(
      90deg,
      #006061 20%,
      #00393a 80%
    );

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
  }

  a {
    text-decoration: none;
  } input, button {
    border-radius: 0;
    appearance: none;
  }
  
`;

export default GlobalStyles;
