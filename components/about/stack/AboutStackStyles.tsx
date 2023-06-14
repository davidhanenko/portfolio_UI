import styled, { keyframes } from 'styled-components';

type AboutStackProps = {
  inView: boolean;
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10%);
  }
   100% {
     opacity: 1;
     transform: translate(0%);
  }
`;

const Stack = styled.section`
  padding-top: 5rem;
  color: var(--white);

  opacity: 0;
  transform: translateY(10%);

  animation: ${(props: AboutStackProps) =>
      props.inView && fadeIn}
    0.6s;
  animation-fill-mode: forwards;

  @media (pointer: coarse) {
    animation: ${(props: AboutStackProps) =>
        props.inView && fadeIn}
      0.75s;
    animation-fill-mode: forwards;
  }

  h3 {
    font-size: 2rem;
    letter-spacing: 0.07rem;
    font-weight: 400;
    padding-bottom: 0.5rem;
  }

  .learning {
    color: var(--lightGray);
  }

  .tech-title,
  .tech-title-learn {
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 200;
    letter-spacing: 0.11rem;

    &::after {
      content: '|';
      padding: 0 0.5rem;
      color: var(--teal);
    }

    &:last-of-type {
      &::after {
        content: '';
      }
    }
  }

  hr {
    margin: 3rem 0;
    height: 1px;
    border: none;
    background: var(--teal);
  }
`;

export { Stack };
