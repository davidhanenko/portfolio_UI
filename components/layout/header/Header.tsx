import { NavStateProvider } from '../../../lib/useNav';
import { HeaderStyles} from './HeaderStyles';
import { Logo } from './logo/Logo';
import { Nav } from './nav/Nav';

export const Header = () => {
  return (
    <NavStateProvider>
      <HeaderStyles>
        <Logo />
        <Nav />
      </HeaderStyles>
    </NavStateProvider>
  );
};
