import styled from 'styled-components';

interface ILogoProps {
  readonly isOpen?: boolean;
}

const LogoStyles = styled.div<ILogoProps>`
  z-index: 3;

  .logo-1 {
  }
  .logo-2 {
    background: var(--white);
  }
`;
export { LogoStyles };
