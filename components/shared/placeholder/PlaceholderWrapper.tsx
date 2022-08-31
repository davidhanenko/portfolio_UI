import styled, { keyframes } from 'styled-components';

const blink = keyframes`
   0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const PlaceholderWrapperStyles = styled.div`
  width: 70vw;
  margin: 5rem auto;
  border-radius: 0.5rem;
  background: var(--white);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  padding: 1rem;

  @media (max-width: 768px) {
    width: 96vw;
  }

  .placeholder {
    background: var(--lightGray);
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    animation: ${blink} 1.5s infinite ease-in-out;
  }
`;


