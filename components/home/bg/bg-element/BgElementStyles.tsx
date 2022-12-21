import styled, { css, keyframes } from 'styled-components';

export interface IBgElementProps {
  readonly nameAnimationEnd: boolean;
  readonly top: number | string;
  readonly left: number | string;
  readonly int: number | string;
}

const appear = (props: IBgElementProps) => keyframes`
    0% {
      opacity: 0;
      transform: scale(0);
    }
     15% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
    90% {
      opacity: 0;
      transform: scale(0);
    }
     100% {
      opacity: 0;
      transform: scale(0);
    }
  `;

const Element = styled.span.attrs(
  (props: IBgElementProps) => ({
    int: props.int,
    style: {
      top: props.top,
      left: props.left,
    },
  })
)`

  opacity: 0;
  transform: scale(0);
  left: -100%;
  position: absolute;
  animation: ${(props: IBgElementProps) =>
      props.nameAnimationEnd && appear(props)};
  animation-duration: ${props => props.int};
  animation-iteration-count: infinite;

  .tech-img {
    position: relative;
    height: 55px;
    width: 100px;
  }
`;

export { Element };
