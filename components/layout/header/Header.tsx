import { HeaderStyles, LogoStyles } from './HeaderStyles';
import { Logo } from './logo/Logo';
import { Nav } from './nav/Nav';

export const Header = () => {
  return (
    <HeaderStyles>
      <Logo />
      <Nav />
    </HeaderStyles>
  );
};
