import { HeaderStyles, LogoStyles } from './HeaderStyles';
import Hamburger from 'hamburger-react';

export const Header = () => {
  return (
    <HeaderStyles>
      <LogoStyles>
        <span className='logo-1'>D</span>
        <span className='logo-2'>H</span>
      </LogoStyles>
      <Hamburger />
    </HeaderStyles>
  );
};
