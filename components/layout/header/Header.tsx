import { divide } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { useAnimation } from '../../../lib/useAnimation';
import { useNav } from '../../../lib/useNav';
import { HeaderStyles } from './HeaderStyles';
import { Logo } from './logo/Logo';
import { Nav } from './nav/Nav';

export const Header = () => {
  const [displayHeader, setDisplayHeader] = useState();
  const [isScroll, setIsScroll] = useState(false);

  const { isOpen } = useNav();
  const { nameAnimationEnd } = useAnimation();

  const scrollRef = useRef({
    scrollPos: 0,
  });

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsScroll(true);
    }
    if (window.pageYOffset < 100) {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let value: any = sessionStorage.getItem('showNav');
    setDisplayHeader(JSON.parse(value));
  }, []);

  return (
    <HeaderStyles
      nameAnimationEnd={nameAnimationEnd}
      displayHeader={displayHeader}
      isScroll={isScroll}
    >
      {!isOpen ? <Logo /> : <div></div>}
      <Nav />
    </HeaderStyles>
  );
};
