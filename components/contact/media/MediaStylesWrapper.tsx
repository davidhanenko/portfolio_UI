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

const MediaStylesWrapper = styled.aside`
  position: absolute;
  bottom: 4rem;
  right: 4rem;
  padding-right: 1rem;

  transform: translateY(200%);
  animation: ${(props: PropsTypes) =>
    props.inView && fadeIn};
  animation-duration: 1s;
  animation-delay: 1s;

  animation-fill-mode: forwards;

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
`;

export { MediaStylesWrapper };
