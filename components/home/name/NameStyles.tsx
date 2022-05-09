import styled, { keyframes } from 'styled-components';

export interface INameProps {
  readonly nameAnimationDuration?: number | string;
}

const nameX = keyframes`
    0% {
      transform: translateX(-7.5%);
    }
    100% {
      transform: translateX(-20%);
    } 
  `;

const nameY = keyframes`
    0% {
      transform: translateY(0%);
    } 
    100% {
      transform: translateY(-150%);
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
      transform: translateX(59%);
      height: 100%;
    }
    15% {
      transform: translate(54%); 
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
      transform: translateX(116%);
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
      opacity: 1;  
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

const NameStyles = styled.div<INameProps>`
  display: flex;
  flex-flow: row wrap;
  min-width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transform: translateX(-7.5%);
  font-size: var(--fontSize);
  color: var(--orange);
  font-weight: 600;

  -webkit-animation: ${nameX} 1.5s linear;
  animation: ${nameX} 1.5s linear;
  animation-delay: ${props => props.nameAnimationDuration};
  animation-fill-mode: forwards;

  .name {
    -webkit-animation: ${nameY} 1.5s;
    animation: ${nameY} 1.5s;
    animation-delay: ${props =>
      props.nameAnimationDuration};
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  .first-name {
    display: inline-block;
    transform: translateX(116%);

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
    @media (max-width: 600px) {
      font-size: 4rem;
    }
  }
  .last-name {
    display: inline-block;

    padding: 0 1rem;
    z-index: 2;
    animation: ${lastR} ${props =>
  props.nameAnimationDuration};
    animation-delay: 2.3s;
    animation-fill-mode: forwards;

    .last-name-rest {
      visibility: 0;
      -webkit-animation: ${fadeInVisibilityR} ${props => props.nameAnimationDuration} cubic-bezier(1, 0.06, 0.4, 1.16);
      animation: ${fadeInVisibilityR} 5s
        cubic-bezier(1, 0.06, 0.4, 1.16);
    }

    @media (max-width: 600px) {
      font-size: 4rem;
    }
  }

  .last-name-overlay {
    position: absolute;
    height: 100px;
    width: 500px;
    background: var(--bgDark);
    z-index: 2;
    transform: translateX(59%);
    transform-style: preserve-3d;

    -webkit-animation: ${lastRRest} 4s;
    animation: ${lastRRest} 4s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
    transform-origin: right;
  }
`;
export { NameStyles };
