import { useAnimation } from '../../../lib/useAnimation';
import { NavStateProvider } from '../../../lib/useNav';
import { HeaderStyles } from './HeaderStyles';
import { Logo } from './logo/Logo';
import { Nav } from './nav/Nav';

export const Header = () => {
  const { nameAnimationEnd } = useAnimation();

  return (
    <NavStateProvider>
      <HeaderStyles nameAnimationEnd={nameAnimationEnd}>
        <Logo />
        <Nav />
      </HeaderStyles>
    </NavStateProvider>
  );
};
