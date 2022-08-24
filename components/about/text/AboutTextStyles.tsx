import styled, { keyframes } from 'styled-components';

type AboutTextProps = {
  inView: boolean;
  cvInView: boolean;
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
    1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;

  @media (pointer: coarse) {
    animation: ${(props: AboutTextProps) =>
        props.inView && fadeIn}
      1s;
    animation-fill-mode: forwards;
  }

  h2 {
    font-size: 5em;
    color: var(--white);
    padding-bottom: 2rem;
  }
  p {
    font-size: 1.8em;
    padding: 1rem 0;
    font-weight: 200;
  }

  @media (max-width: 768px) {
    padding-bottom: 6rem;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
    padding-bottom: 5rem;
  }

  /* resume button */
  a {
    position: absolute;
    bottom: 0;

    color: var(--white);
    background: var(--gray);
    font-size: 2rem;
    text-transform: uppercase;
    padding: 0.75rem 1.5rem;

    transition: all 0.25s;

    &:hover {
      color: var(--orange);
    }
  }
`;

export { Text };
