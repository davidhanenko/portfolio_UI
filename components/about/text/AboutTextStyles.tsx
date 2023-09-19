import styled, { keyframes } from 'styled-components';

type AboutTextProps = {
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

const Text = styled.article`
  color: var(--white);

  position: relative;

  opacity: 0;
  transform: translateY(10%);

  animation: ${(props: AboutTextProps) =>
      props.inView && fadeIn}
    0.6s;
  animation-fill-mode: forwards;

  @media (pointer: coarse) {
    animation: ${(props: AboutTextProps) =>
        props.inView && fadeIn}
      1s;
    animation-fill-mode: forwards;
  }

  h2 {
    font-size: 5em;
    color: var(--teal);
    padding-bottom: 2rem;
  }
  p {
    font-size: 1.8em;
    padding: 1rem 0;
    font-weight: 200;
    text-align: justify;

    &:last-child {
      color: var(--gray);
    }
  }

  @media (max-width: 768px) {
    padding-bottom: 6rem;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding-bottom: 5rem;
  }
`;

export { Text };
