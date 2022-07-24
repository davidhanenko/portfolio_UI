import styled, { keyframes } from 'styled-components';

type PropsTypes = {
  readonly inView: boolean;
};

const fadeIn = keyframes`
  0% {
    transform: translateY(200%);
  }
 100% {
    transform: translateY(0%);
  }
`;

const fadeInMobile = keyframes`
  0% {
    transform: translateX(-200%);
  }
 100% {
    transform: translateX(0%);
  }
`;

const MediaStylesWrapper = styled.aside`
  position: absolute;
  bottom: 4rem;
  right: 4rem;
  padding-right: 1rem;

  transform: translateY(200%);
  animation: ${(props: PropsTypes) =>
    props.inView && fadeIn};
  animation-duration: 1s;
  animation-delay: 1.2s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(
    0.17,
    0.48,
    0.45,
    1.15
  );

  article {
    display: flex;
    flex-direction: column;

    &::after {
      content: '';
      height: 150%;
      width: 1px;
      background: white;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    bottom: 4rem;
    left: 2rem;
    padding-right: 0;

    transform: translateX(-200%);

    animation: ${(props: PropsTypes) =>
      props.inView && fadeInMobile};
    animation-duration: 1s;
    animation-delay: 1.2s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(
      0.17,
      0.48,
      0.45,
      1.15
    );

    article {
      display: flex;
      flex-direction: row;

      &::after {
        content: '';
        width: 35%;
        height: 1px;
        background: white;
        position: absolute;
        left: 0;
        bottom: 0;
      }

      svg {
        margin: 0.75rem 0.5rem;
      }
    }
  }

  @media (max-width: 576px) {
    article {
      &::after {
        width: 45%;
      }
    }
  }
`;

export { MediaStylesWrapper };