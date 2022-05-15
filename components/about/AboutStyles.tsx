import styled, { keyframes } from 'styled-components';

interface IAboutProps {
  readonly nameAnimationDuration?: number | string;
}

const AboutStyles = styled.div<IAboutProps>`
  padding: 10rem;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 3rem;
  @media (max-width: 768px) {
    display: block;
    font-size: 0.8rem;
  }
  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

export { AboutStyles };