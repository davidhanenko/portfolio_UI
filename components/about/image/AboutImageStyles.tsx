import styled, { keyframes } from 'styled-components';

type AboutImageProps = {
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

const AboutImg = styled.section`
  position: relative;
  display: block;
  width: 350px;
  height: 400px;

  opacity: 0;
  transform: translateY(10%);

  animation: ${(props: AboutImageProps) =>
      props.inView && fadeIn}
    0.6s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;

  @media (pointer: coarse) {
    animation: ${(props: AboutImageProps) =>
        props.inView && fadeIn}
      0.75s;
    animation-fill-mode: forwards;
  }

  @media (max-width: 768px) {
    margin: 7rem 1rem;
  }

  span {
    box-shadow: 0 10px 15px -3px var(--bgDarkOpacity);
  }
`;

export { AboutImg };
