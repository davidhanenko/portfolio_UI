import styled, { keyframes } from 'styled-components';

export interface GreetProps {
  readonly nameAnimationDuration?: number | string;
}

const greetAnimation = keyframes`
    0% {
      bottom: -40%;
    }
    100% {
      bottom: 25vh;
    } 
  `;

// animation for x-small screens
const greetAnimationXSmall = keyframes`
    0% {
      bottom: -40%;
    }
    100% {
      bottom: 45vh;
    } 
  `;

const GreetTxt = styled.section<GreetProps>`
  color: var(--white);
  bottom: -40%;
  position: absolute;
  right: 5%;
  width: 50%;

  animation: ${greetAnimation} 2s;
  animation-delay: ${props => props.nameAnimationDuration};
  animation-fill-mode: forwards;

  @media (max-width: 576px) {
    animation: ${greetAnimationXSmall} 2s;
    animation-delay: ${props =>
      props.nameAnimationDuration};
    animation-fill-mode: forwards;
  }

  p {
    font-size: 2.3rem;
    font-weight: 300;

    user-select: none;
  }

  @media (max-width: 768px) {
    width: 65%;
    p {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 576px) {
    width: 85%;
    p {
      font-size: 1.4rem;
    }
  }
`;

export { GreetTxt };
