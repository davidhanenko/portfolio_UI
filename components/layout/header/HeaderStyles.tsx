import styled from 'styled-components';

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  color: var(--orange);
  font-size: 7rem;
  .logo-1 {
    background: var(--white);
    padding: 0 1rem;
  }
  .logo-2 {
  }

  .hamburger-react {
    color: var(--white);
  }
`;

const LogoStyles = styled.div`
  .logo-1 {
    background: var(--white);
    padding: 0 1rem;
  }
  .logo-2 {
  }
`;

export { HeaderStyles, LogoStyles };
