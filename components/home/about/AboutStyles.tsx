import styled, { keyframes } from 'styled-components';

const about = keyframes`
    0% {
      /* transform: translateY(calc(200%));  */
      bottom: calc(-40%);
    }
    100% {
      /* transform: translateY(0%); */
      bottom: 20%;
    } 
  `;

const AboutStyles = styled.section`
  color: var(--white);
  bottom: calc(-40%);
  /* transform: translateY(calc(200%)); */

  position: absolute;
  right: 5%;
  width: 50%;
  margin-top: 20rem;

  h2 {
    font-size: 5rem;
  }
  p {
    font-size: 2.3rem;
  }

  -webkit-animation: ${about} 2s;
  animation: ${about} 2.5s;
  animation-delay: 5.5s;
  animation-fill-mode: forwards;
`;

export { AboutStyles };
