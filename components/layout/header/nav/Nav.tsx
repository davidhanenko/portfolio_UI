import { useState } from 'react';
import { NavStyled } from './NavStyles';
import { Squash as Hamburger } from 'hamburger-react';
import { NavLink } from './nav-link/NavLink';

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <NavStyled isOpen={isOpen}>
      <Hamburger
        size={48}
        hideOutline={false}
        label='Show menu'
        toggled={isOpen}
        toggle={setIsOpen}
      />
      <ul className='nav-links'>
        <NavLink link={'Home'} />
        <NavLink link={'About'} />
        <NavLink link={'Projects'} />
        <NavLink link={'Contact'} />
      </ul>
    </NavStyled>
  );
};
