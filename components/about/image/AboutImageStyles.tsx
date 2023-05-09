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
  width: 300px;
  height: 350px;

  opacity: 0;
  transform: translateY(10%);

  animation: ${(props: AboutImageProps) =>
      props.inView && fadeIn}
    0.6s;
  animation-delay: 0.4s;
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
    filter: drop-shadow(4px 4px 50px gray) invert(15%);
    transition: filter 0.3s ease-in-out;

    &:hover {
      filter: none;
    }
  }
`;

export { AboutImg };
