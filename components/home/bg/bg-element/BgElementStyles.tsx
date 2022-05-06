import styled, { keyframes } from 'styled-components';

export interface BgProps {
  readonly top: number | string;
  readonly left: number | string;
}


const elementAnimation = keyframes`
    0% {
      opacity: 0;
    }
     50% {
    opacity: 1;
    } 
    100% {
    opacity: 0;
    } 
  `;

const BgElementStyles = styled.span.attrs<BgProps>(
  props => ({
    style: {
      top: props.top,
      left: props.left,
    },
  })
)`
  /* opacity: 0; */
  position: absolute;
  transition: all 1s;
  animation: ${elementAnimation} 1s;
`;

export { BgElementStyles };
