import styled, { keyframes } from 'styled-components';

const about = keyframes`
    0% {
      bottom: -40%;
    }
    100% {
      bottom: 20%;
    } 
  `;

const AboutStyles = styled.section`
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

  -webkit-animation: ${about} 2s;
  animation: ${about} 2.5s;
  animation-delay: 5.5s;
  animation-fill-mode: forwards;
`;

export { AboutStyles };
