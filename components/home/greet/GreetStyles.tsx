import styled, { keyframes } from 'styled-components';

export interface GreetProps {
  readonly nameAnimationDuration?: number | string;
}

const greetAnimation = keyframes`
    0% {
      bottom: -40%;
    }
    100% {
      bottom: 30%;
    } 
  `;

const GreetStyles = styled.section<GreetProps>`
  color: var(--white);
  bottom: -40%;
  position: absolute;
  right: 5%;
  width: 45%;
  margin-top: 20rem;
  h2 {
    font-size: 5rem;
    font-weight: 400;
  }
  p {
    font-size: 2.3rem;
    font-weight: 300;
  }
  animation: ${greetAnimation} 2s;
  animation-delay: ${props => props.nameAnimationDuration};
  animation-fill-mode: forwards;
`;

export { GreetStyles };
