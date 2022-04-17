import { NavStyles } from './NavStyles';
import { Squash as Hamburger } from 'hamburger-react';

import { useNav } from '../../../../lib/useNav';

import { NavLink } from './nav-link/NavLink';

export const Nav: React.FC = () => {
  const { isOpen, setOpen, toggleNav, closeNav } =
    useNav();

  return (
    <NavStyles isOpen={isOpen}>
      <Hamburger
        size={48}
        hideOutline={false}
        label='Show nav links'
        toggled={isOpen}
        toggle={toggleNav}
      />
      <ul className='nav-links'>
        <NavLink link={''} page={'home'} />
        <NavLink link={'about'} page={'about'} />
        <NavLink link={'projects'} page={'projects'} />
        <NavLink link={'contact'} page={'contact'} />
      </ul>
    </NavStyles>
  );
};
