import { useEffect, useState } from 'react';
import { useAnimation } from '../../../lib/useAnimation';
import { NavStateProvider } from '../../../lib/useNav';
import { HeaderStyles } from './HeaderStyles';
import { Logo } from './logo/Logo';
import { Nav } from './nav/Nav';

export const Header = () => {
  const [displayHeader, setDisplayHeader] = useState();
  const { nameAnimationEnd } = useAnimation();
  useEffect( () => {
    
    let value: any = sessionStorage.getItem('animationEnd');

    setDisplayHeader(JSON.parse(value));
  }, []);

  return (
    <NavStateProvider>
      <HeaderStyles
        nameAnimationEnd={nameAnimationEnd}
        displayHeader={displayHeader}
      >
        <Logo />
        <Nav />
      </HeaderStyles>
    </NavStateProvider>
  );
};
