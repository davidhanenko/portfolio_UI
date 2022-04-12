import styled, { keyframes } from 'styled-components';

const lastR = keyframes`
    0% {
      transform: translate(0%);
      /* background: black; */
    }
    100% {
        transform: translate(15%);
        background: #ffffff;
    } 
  `;
const lastRRest = keyframes`
    0% {
          transform: translateX(60%);
    }
    90% {
        transform: translate(150%); 
         height: 100%;  
    } 
    100% {
      transform: translate(150%); 
      height: 0; 
    } 
  `;

const firstLeft = keyframes`
    0% {
      transform: translate(120%);
    }
    100% {
        transform: translate(20%);
    } 
  `;

const fadeInVisibility = keyframes`
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
  display: flex;
  flex-flow: row wrap;
  animation-delay: 2s;
  min-width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transform: translateX(-7.5%);

  .first-name {
    display: inline-block;
    color: var(--orange);
    font-size: 10rem;
    margin-right: 1rem;
    transform: translateX(120%);

    /* position: relative; */
    z-index: 1;
    animation: ${firstLeft} 5s;
    animation-delay: 2s;
    animation-fill-mode: forwards;

    .first-name-rest {
      animation: ${fadeInVisibility} 5s;
      /* animation-delay: 2s; */
    }
    @media (max-width: 601px) {
      font-size: 4rem;
    }
  }
  .last-name {
    display: inline-block;
    color: var(--orange);
    font-size: 10rem;
    animation: ${lastR} 5s;
    animation-delay: 2s;
    z-index: 2;
    animation-fill-mode: forwards;

    .last-name-rest {
      animation: ${fadeInVisibility} 5s
        cubic-bezier(1, 0.06, 0.4, 1.16);
    }

    @media (max-width: 601px) {
      font-size: 4rem;
    }
  }

  .test-1 {
    position: absolute;
    height: 100px;
    width: 400px;
    background: black;
    z-index: 2;
    transform: translateX(60%);

    animation: ${lastRRest} 6s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
    transform-origin: right;
  }
`;
export { NameStyles };
