import { useEffect, useRef } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

import {
  IContextState,
  useNav,
} from '../../../../lib/useNav';

import { NavLink } from './nav-link/NavLink';
import { NavLogoStyles, NavStyles } from './NavStyles';
import { Logo } from '../logo/Logo';

export const Nav: React.FC<IContextState> = () => {
  const { isOpen, toggleNav, closeNav } = useNav();

  const navRef = useRef<HTMLDivElement>(null);

  // close nav on click outside
  useEffect(() => {
    //  click outside nav handler
    const handleClickOutside = (event: Event): void => {
      if (
        isOpen &&
        !navRef?.current?.contains(event.target as Node)
      ) {
        closeNav();
      }
    };

    //  click outside nav listener
    document.addEventListener(
      'mousedown',
      handleClickOutside
    );

    // cleanup the event listener
    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, [isOpen]);

  return (
    <NavStyles isOpen={isOpen} ref={navRef}>
      <Hamburger
        size={48}
        hideOutline={false}
        label='Show nav links'
        toggled={isOpen}
        toggle={toggleNav}
      />
      <div className='nav-container'>
        <NavLogoStyles>
          <Logo />
        </NavLogoStyles>
        <ul className='nav-links'>
          <NavLink link={''} page={'home'} />
          <NavLink link={'about'} page={'about'} />
          <NavLink link={'projects'} page={'projects'} />
          <NavLink link={'contact'} page={'contact'} />
        </ul>
      </div>
    </NavStyles>
  );
};
