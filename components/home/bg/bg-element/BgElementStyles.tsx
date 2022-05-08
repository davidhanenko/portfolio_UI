import styled, { css, keyframes } from 'styled-components';

export interface BgProps {
  readonly top: number | string;
  readonly left: number | string;
  readonly int: number | string;
}

const ap = (props: BgProps) => keyframes`
    0% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0);
       

    }
  `;

const BgElementStyles = styled.span.attrs(
  (props: BgProps) => ({
    top: props.top,
    left: props.left,
    int: props.int,
    style: {
      top: props.top,
      left: props.left,
    },
  })
)`
  animation: ${ap} infinite;
  /* animation: ${props => ap(props)}
    cubic-bezier(0, 0.88, 1, 0.64); */
  animation-duration: ${props => props.int};
  animation-fill-mode: forwards;
  opacity: 0;
  position: absolute;
`;

export { BgElementStyles };
