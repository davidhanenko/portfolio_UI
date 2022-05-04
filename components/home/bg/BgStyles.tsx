import styled, { keyframes } from 'styled-components';

export interface BgProps {
  readonly mix: number;
}

const animation1 = keyframes`
    0% {
      transform: rotate(270deg) translateX(0);
      opacity: 1;
    }
     100% {
    opacity: 1;
    } 
    100% {
    transform: rotate(270deg) translateX(-1000px);
    opacity: 0;
    } 
  `;

const BgStyles = styled.div<BgProps>`
  height: 100vh;
  /* width: 100vw; */

  .stack-img {
    position: absolute;
    top: ${props => props.mix};
  }
`;

export { BgStyles };
