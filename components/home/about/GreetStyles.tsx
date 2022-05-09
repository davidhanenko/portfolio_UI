import styled, { keyframes } from 'styled-components';

export interface IGreetProps {
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

const GreetStyles = styled.section<IGreetProps>`
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

  -webkit-animation: ${greetAnimation} 2s;
  animation: ${greetAnimation} 2s;
  animation-delay: ${props => props.nameAnimationDuration};
  animation-fill-mode: forwards;
`;

export { GreetStyles };
