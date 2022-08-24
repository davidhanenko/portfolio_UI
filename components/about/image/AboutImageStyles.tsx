import styled, { keyframes } from 'styled-components';

type AboutImageProps = {
  inView: boolean;
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10%);
  }
  50% {
    filter: blur(0.1rem);
  }
   100% {
     opacity: 1;
     transform: translate(0%);
  }
`;

const AboutImg = styled.section`
  position: relative;
  display: block;

  opacity: 0;
  transform: translateY(10%);

  animation: ${(props: AboutImageProps) =>
      props.inView && fadeIn}
    0.75s;
  animation-delay: 0.35s;
  animation-fill-mode: forwards;

  @media (pointer: coarse) {
    animation: ${(props: AboutImageProps) =>
        props.inView && fadeIn}
      0.75s;
    animation-fill-mode: forwards;
  }

  @media (max-width: 768px) {
    padding: 7rem 1rem;
  }

  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
  }
`;

export { AboutImg };
