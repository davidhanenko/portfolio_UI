import styled, { css, keyframes } from 'styled-components';

export interface IBgElementProps {
  readonly animateBg: boolean;
  readonly top: number | string;
  readonly left: number | string;
  readonly int: number | string;
}

const appear = (props: IBgElementProps) => keyframes`
    0% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
    99% {
      opacity: 0;
      transform: scale(0);
    }
     100% {
      opacity: 0;
      transform: scale(0);
    }
  `;

const BgElementStyles = styled.span.attrs(
  (props: IBgElementProps) => ({
    // top: props.top,
    // left: props.left,
    int: props.int,
    style: {
      top: props.top,
      left: props.left,
    },
  })
)`
  opacity: 0;
  transform: scale(0);
  position: absolute;
  animation: ${(props: IBgElementProps) =>
      props.animateBg && appear(props)}
    cubic-bezier(0, 0.62, 0.62, 0.96);
  animation-duration: ${props => props.int};
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;

  .tech-img {
    position: relative;
    height: 55px;
    width: 100px;
  }
`;

export { BgElementStyles };
