import styled, { css, keyframes } from 'styled-components';
import { NavProps } from '../nav/NavStyles';

const logoIn = keyframes`
  0% {
    transform: translateY(0%);
    z-index: 3;
  }
  30% {
    transform: translateY(0%);
    z-index: 3;
  }
  50% {
    transform: translateY(-120%);
    z-index: 3;
  }
  100% {
    transform: translateY(0%);
    z-index: 5;
  }
`;

const logoOut = keyframes`
  0% {
    z-index: 5;
    transform: translateY(0%);
  }
  50% {
    transform: translateY(-120%);
    z-index: 3;
  }
  100% {
    transform: translateY(0%);
    z-index: 3;
  }
`;

const LogoStyles = styled.div<NavProps>`

  z-index: 3;


  ${props =>
    props.isOpen &&
    css`
      animation: ${logoIn} 1.2s;
      animation-fill-mode: forwards;
    `};
    
  .logo-1 {
  }
  .logo-2 {
    background: var(--white);
  }
`;
export { LogoStyles };
