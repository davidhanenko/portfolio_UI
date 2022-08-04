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
      transform: translateY(-25vh);
    } 
  `;

// animation for x-small screens
const nameYXSmall = keyframes`
    0% {
      transform: translateY(0%);
    } 
    100% {
      transform: translateY(-35vh);
    } 
  `;

const lastR = keyframes`
    0% {
      transform: translate(0%);
      background: transparent;
    }
    5% {
      background: var(--dark);
    }
    100% {
        transform: translate(15%);
        background: var(--white);
    } 
  `;

// last name overlay animation
const lastRRest = keyframes`
    0% {
      transform: translateX(25%);
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

    70% {
       visibility: hidden; 
        opacity: 0;   
    } 
   
    100% {
      visibility: visible;
      opacity: 1;  
    } 
  `;

const NameContainer = styled.div<INameProps>`
  display: flex;
  flex-flow: row wrap;
  min-width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transform: translateX(-7.5%);
  font-size: 9vw;
  color: var(--lightOrange);
  font-weight: 600;

  animation: ${nameX} 1.5s linear;
  animation-delay: ${props => props.nameAnimationDuration};
  animation-fill-mode: forwards;

  @media (min-width: 1400px) {
    font-size: 11rem;
  }
  @media (max-width: 576px) {
    font-size: 3.7rem;
  }

  .name {
    user-select: none;

    animation: ${nameY} 1.5s;
    animation-delay: ${props =>
      props.nameAnimationDuration};
    animation-timing-function: linear;
    animation-fill-mode: forwards;

    @media (max-width: 576px) {
      animation: ${nameYXSmall} 1.5s;
      animation-delay: ${props =>
        props.nameAnimationDuration};
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    }
  }

  .first-name {
    display: inline-block;
    transform: translateX(116%);

    z-index: 1;
    animation: ${firstLeft} 3s;
    animation-delay: 2s;
    animation-fill-mode: forwards;

    .first-name-rest {
      animation: ${fadeInVisibilityL} 3s
        cubic-bezier(1, 0.06, 0.4, 1.16);
    }
  }
  .last-name {
    position: relative;

    display: inline-block;
    padding: 0 1rem;
    z-index: 2;
    animation: ${lastR} 3s;
    animation-delay: 2s;
    animation-fill-mode: forwards;

    .last-name-rest {
      visibility: 0;
      animation: ${fadeInVisibilityR} 5s
        cubic-bezier(1, 0.06, 0.4, 1.16);
    }
  }

  .last-name-overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background: var(--dark);
    z-index: 2;
    left: 0;
    transform: translateX(25%);
    transform-style: preserve-3d;

    animation: ${lastRRest} 3s;
    animation-delay: 2.5s;
    animation-fill-mode: forwards;
    transform-origin: right;
  }
`;
export { NameContainer };
