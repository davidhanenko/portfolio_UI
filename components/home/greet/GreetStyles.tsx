import styled, { keyframes } from 'styled-components';

export interface GreetProps {
  readonly nameAnimationEnd: boolean;
}

const greetAnimation = keyframes`
    0% {
      bottom: 20vh;
      opacity: 0;
    }
    100% {
      bottom: 25vh;
      opacity: 1;

    } 
  `;

// animation for x-small screens
const greetAnimationXSmall = keyframes`
    0% {
      bottom: 40vh;
      opacity: 0;
    }
    100% {
      bottom: 45vh;
      opacity: 1;
    } 
  `;

const GreetTxt = styled.section<GreetProps>`
  color: var(--white);
  bottom: -40%;
  position: absolute;
  right: 5%;
  width: 50%;

  animation: ${(props: GreetProps) =>
    props.nameAnimationEnd && greetAnimation};
  animation-duration: 0.8s;
  animation-fill-mode: forwards;

  animation-fill-mode: forwards;

  @media (max-width: 600px) {
    animation: ${(props: GreetProps) =>
      props.nameAnimationEnd && greetAnimationXSmall};
    animation-duration: 0.8s;
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

  @media (max-width: 600px) {
    width: 85%;
    p {
      font-size: 1.4rem;
    }
  }
`;

export { GreetTxt };
