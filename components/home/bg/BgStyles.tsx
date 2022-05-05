import styled, { keyframes } from 'styled-components';

export interface BgProps {
  readonly top: number | string;
  readonly left: number | string;
}

const animation1 = keyframes`
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

const BgStyles = styled.div<BgProps>`
  height: 100vh;

`;

const BgElStyles = styled.span<BgProps>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  opacity: 0;

  animation: ${animation1} 2s infinite;
`;

export { BgStyles, BgElStyles };
