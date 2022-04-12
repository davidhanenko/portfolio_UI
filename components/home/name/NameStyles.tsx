import styled, { keyframes } from 'styled-components';

const fadeInH = keyframes`
    0% {
      transform: translate(0%);
      background: none;
    }
    100% {
        transform: translate(15%);
        background: #ffffff;
    } 
  `;
const fadeInR = keyframes`
    0% {
      transform: translate(50%);
    }
    100% {
        transform: translate(150%);  
    } 
  `;

const fadeInL = keyframes`
    0% {
      transform: translate(120%);
    }
    100% {
        transform: translate(20%);
    } 
  `;
const fadeInLr = keyframes`
    0% {
      visibility: hidden; 
      opacity: 0;  
    }
    100% {
      visibility: visible;
      opacity: 1;  
    } 
  `;

const NameStyles = styled.div`
  animation-delay: 2s;
  display: flex;

  height: 100vh;
  justify-content: center;
  align-items: center;

  .first-name {
    color: var(--orange);
    font-size: 10rem;
    margin-right: 1rem;
    transform: translateX(120%);

    /* position: relative; */
    z-index: 1;
    animation: ${fadeInL} 5s;
    animation-delay: 2s;
    animation-fill-mode: forwards;

    .first-name-rest {
      animation: ${fadeInLr} 5s;
      /* animation-delay: 2s; */
    }
    @media (max-width: 601px) {
      font-size: 10rem;
    }
  }
  .last-name {
    /* position: relative; */
    color: var(--orange);
    font-size: 10rem;
    /* background: white; */
    /* transform: translateX(-15%); */
    /* background: black; */
    animation: ${fadeInH} 5s;
    animation-delay: 2s;
    z-index: 2;
    animation-fill-mode: forwards;

    .last-name-rest {
      animation: ${fadeInLr} 5s
        cubic-bezier(1, 0.06, 0.4, 1.16);
      /* animation-delay: 2s; */
    }

    @media (max-width: 601px) {
      font-size: 10rem;
    }
  }

  /* .test {
    position: absolute;
    left: 65%;
    height: 100px;
    width: 350px;
    background: black;
    z-index: 2;
  } */

  .test-1 {
    position: absolute;
    height: 100px;
    width: 400px;
    background: black;
    z-index: 2;
    transform: translateX(60%);

    animation: ${fadeInR} 5s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
    transform-origin: right;
  }
`;
export { NameStyles };
