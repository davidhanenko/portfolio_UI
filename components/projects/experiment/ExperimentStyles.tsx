import styled, { keyframes } from 'styled-components';

type ExperimentProps = {
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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f47d28e9;
  z-index: 2;

  padding: 0 2rem;
  display: flex;
  align-items: end;

  transform: translateY(-105%);
  transition: all 0.4s;

  .links {
    position: absolute;
    top: 2rem;
    right: 2rem;

    a {
      font-size: 1.8rem;
      color: var(--white);
      padding: 1rem;

      position: relative;

      svg {
        transition: all 0.3s;
      }

      &:after {
        content: attr(data-tooltip);
        position: absolute;
        bottom: -2rem;
        right: 1rem;
        padding: 0.5rem 1rem;
        font-size: 1.3rem;
        color: var(--white);
        background: var(--gray);
        width: 5rem;
        text-align: center;

        display: none;
        transition: all 0.25s;
      }
      @media (hover: hover) {
        &:hover svg {
          color: var(--dark);
          transform: scale(1.3);
        }
        &:hover::after {
          display: block;
        }
      }
    }
  }

  p {
    padding-bottom: 3rem;
    user-select: none;

    color: black;
    font-size: 1.5rem;
    text-align: justify;
    line-height: 1.6rem;
    font-weight: 300;
  }
`;

const Title = styled.h4`
  font-size: 2.2rem;
  position: absolute;
  bottom: -1%;
  left: 0;
  color: var(--dark);

  padding: 1rem 0 1rem 2rem;

  background: #ffffff9e;
  width: 100%;

  transform: translateY(-5%);
  transition: all 0.6s;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const ExperimentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;

  max-width: var(--maxWidth);

  opacity: 0;
  transform: translateY(10%);

  &:nth-child(1n) {
    animation: ${(props: ExperimentProps) =>
        props.inView && fadeIn}
      0.75s;
    animation-delay: 0s;
    animation-fill-mode: forwards;
  }

  &:nth-child(2n) {
    animation: ${(props: ExperimentProps) =>
        props.inView && fadeIn}
      0.75s;
    animation-delay: 0.3s;
    animation-fill-mode: forwards;

    @media (max-width: 992px) {
      animation: ${(props: ExperimentProps) =>
          props.inView && fadeIn}
        0.75s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }
    @media (max-width: 576px) {
      animation: ${(props: ExperimentProps) =>
          props.inView && fadeIn}
        0.75s;
      animation-delay: 0s;
      animation-fill-mode: forwards;
    }
  }

  &:nth-child(3n) {
    animation: ${(props: ExperimentProps) =>
        props.inView && fadeIn}
      0.75s;
    animation-delay: 0.6s;
    animation-fill-mode: forwards;

    @media (max-width: 992px) {
      animation: ${(props: ExperimentProps) =>
          props.inView && fadeIn}
        0.75s;
      animation-delay: 0s;
      animation-fill-mode: forwards;
    }

    @media (max-width: 576px) {
      animation: ${(props: ExperimentProps) =>
          props.inView && fadeIn}
        0.75s;
      animation-delay: 0s;
      animation-fill-mode: forwards;
    }
  }

  &:hover {
    ${Overlay} {
      transform: translateY(0);
    }
    ${Title} {
      transform: translateY(100%);
    }
  }

  .image-wrapper {
    position: relative;
    overflow: hidden;
    background-color: var(--dark);

    span {
      min-height: 100%;
    }
  }
`;

export { ExperimentContainer, Overlay, Title };
