import styled, { keyframes } from 'styled-components';

const nameX = keyframes`
    0% {
      transform: translateX(-7.5%);
    }
    100% {
      transform: translateX(-20%);;
    } 
  `;
const nameY = keyframes`
    0% {
      transform: translateY(0%);
    } 
    100% {
      transform: translateY(-120%);
    } 
  `;

const lastR = keyframes`
    0% {
      transform: translate(0%);
    }
    100% {
        transform: translate(15%);
        background: #ffffff;
    } 
  `;
const lastRRest = keyframes`
    0% {
      transform: translateX(58%);
      height: 100%;
    }
    15% {
      transform: translate(52%); 
      height: 100%;  
    } 
    99% {
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
      transform: translateX(120%);
    }
    100% {
      transform: translateX(20%);
    } 
  `;

const fadeInVisibilityR = keyframes`
    0% {
      visibility: hidden; 
      opacity: 0;  
    }
     50% {
      visibility: hidden; 
      opacity: 0;  
    }
    100% {
      visibility: visible;
      opacity: 1;  
    } 
  `;

const fadeInVisibilityL = keyframes`
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
  min-width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transform: translateX(-7.5%);
  font-size: var(--fontSize);
  color: var(--orange);
  font-weight: 400;

  -webkit-animation: ${nameX} 2s linear;
  animation: ${nameX} 2s linear;
  animation-delay: 5.5s;
  animation-fill-mode: forwards;

  .name {
    -webkit-animation: ${nameY} 2s;
    animation: ${nameY} 2s;
    animation-delay: 5.5s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  .first-name {
    display: inline-block;
    transform: translateX(120%);

    z-index: 1;
    -webkit-animation: ${firstLeft} 4s;
    animation: ${firstLeft} 4s;
    animation-delay: 2s;
    animation-fill-mode: forwards;

    .first-name-rest {
      -webkit-animation: ${fadeInVisibilityL} 4s
        cubic-bezier(1, 0.06, 0.4, 1.16);
      animation: ${fadeInVisibilityL} 4s
        cubic-bezier(1, 0.06, 0.4, 1.16);
    }
    @media (max-width: 601px) {
      font-size: 4rem;
    }
  }
  .last-name {
    display: inline-block;

    padding: 0 1rem;
    z-index: 2;
    animation: ${lastR} 5s;
    animation-delay: 2.3s;
    animation-fill-mode: forwards;

    .last-name-rest {
      visibility: 0;
      -webkit-animation: ${fadeInVisibilityR} 5s
        cubic-bezier(1, 0.06, 0.4, 1.16);
      animation: ${fadeInVisibilityR} 5s
        cubic-bezier(1, 0.06, 0.4, 1.16);
    }

    @media (max-width: 601px) {
      font-size: 4rem;
    }
  }

  .last-name-overlay {
    position: absolute;
    height: 100px;
    width: 500px;
    background: var(--bgDark);
    z-index: 2;
    transform: translateX(58%);
    transform-style: preserve-3d;

    -webkit-animation: ${lastRRest} 4s;
    animation: ${lastRRest} 4s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
    transform-origin: right;
  }
`;
export { NameStyles };
