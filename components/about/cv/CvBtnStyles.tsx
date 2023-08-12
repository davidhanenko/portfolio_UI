import styled, { keyframes } from 'styled-components';

type AboutCvProps = {
  readonly inView: boolean;
  readonly cvInView: boolean;
};

const fadeInR = keyframes`
  0% {
    opacity: 0;
    transform: translate(100%);
  }
   100% {
     opacity: 1;
     transform: translate(0%) rotate(-360deg);
  }
`;

const fadeInB = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20%);
  }
   100% {
     opacity: 1;
     transform: translate(0%);
  }
`;

const CvBtnWrapper = styled.div``;

const CvBtnStyles = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: var(--white);

  cursor: pointer;

  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  border: none;

  font-size: 2.7rem;
  font-weight: 700;
  color: var(--teal1);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.35s;

  opacity: 0;
  transform: translate(100%);

  animation: ${(props: AboutCvProps) =>
      props.inView && fadeInR}
    0.6s;
  animation-delay: 1s;
  animation-fill-mode: forwards;

  @media (pointer: coarse) {
    opacity: 0;
    transform: translateY(20%);

    animation: ${(props: AboutCvProps) =>
        props.cvInView && fadeInB}
      0.6s;
    animation-delay: 0.25s;
    animation-fill-mode: forwards;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: var(--dark2);
      border: 1px solid var(--teal2);
      box-shadow: 0px 0px 29px -5px rgba(255, 102, 0, 0.98);
    }

    &:active {
      box-shadow: inset 0px 0px 5px 2px
        rgba(120, 120, 120, 0.95);
      transform: translateY(2px);
    }
  }

  @media (max-width: 768px) {
    bottom: 50%;
    transform: translateY(50%);
  }

  @media (max-width: 600px) {
    bottom: -5rem;
    left: 40%;
  }
`;

export { CvBtnStyles, CvBtnWrapper };
