import styled, { css, keyframes } from 'styled-components';

export interface BgElementProps {
  readonly a?: boolean;
  readonly top?: number | string;
  readonly left?: number | string;
  readonly int?: number | string;
}

const appear = (props: BgElementProps) => keyframes`
    0% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
     95% {
      transform: scale(0);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  `;

const BgElementStyles = styled.span.attrs(
  (props: BgElementProps) => ({
    top: props.top,
    left: props.left,
    int: props.int,
    style: {
      top: props.top,
      left: props.left,
    },
  })
)`
  animation: ${props => props.a && appear(props)}
    cubic-bezier(0, 0.62, 0.62, 0.96) infinite;
  animation-duration: ${props => props.int};
  animation-fill-mode: forwards;
  opacity: 0;
  position: absolute;
`;

export { BgElementStyles };
