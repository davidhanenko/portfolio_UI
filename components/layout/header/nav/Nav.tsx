import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Squash as Hamburger } from 'hamburger-react';
import { useRouter } from 'next/router';

import { useNav } from '../../../../lib/useNav';
import { useScroll } from '../../../../lib/useScroll';

import { NavLink } from './nav-link/NavLink';
import { BackButtonStyles, NavLogoStyles, NavStyles } from './NavStyles';
import { Logo } from '../logo/Logo';
import Media from '../../../shared/media/Media';
import { MediaStylesWrapper } from './nav-link/NavLinkStyles';

export const Nav: React.FC = () => {
  const { isOpen, toggleNav, closeNav } = useNav();
  const router = useRouter();
  const { scrollProjectsInView, setScrollProjectsInView } =
    useScroll();

  const currentPath = router.asPath as string;

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
  }, [closeNav, isOpen]);

  return (
    <NavStyles isOpen={isOpen} ref={navRef}>
      {currentPath !== '/' ? (
        <Link href='/' passHref>
          <BackButtonStyles
            onClick={() => setScrollProjectsInView(true)}
          >
            &lt; Back to Projects
          </BackButtonStyles>
        </Link>
      ) : (
        <Hamburger
          size={36}
          hideOutline={false}
          label='Open-Close navbar'
          toggled={isOpen}
          toggle={toggleNav}
        />
      )}
      <div className='nav-container'>
        <NavLogoStyles>
          <Logo />
        </NavLogoStyles>
        <ul className='nav-links'>
          <NavLink link={'home'} title={'home'} />
          <NavLink link={'about'} title={'about'} />
          <NavLink link={'projects'} title={'projects'} />
          <NavLink link={'contacts'} title={'contacts'} />
          <MediaStylesWrapper>
            <Media />
          </MediaStylesWrapper>
        </ul>
      </div>
    </NavStyles>
  );
};
