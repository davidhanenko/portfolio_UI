import { SyntheticEvent, useEffect } from 'react';
import { NameContainer } from './NameStyles';
import disableScroll from 'disable-scroll';

import { useAnimation } from '../../../lib/useAnimation';

import { NAME_ANIMATION_DURATION as nameAnimationDuration } from '../../../config';

interface AnimationEvent<T = Element>
  extends SyntheticEvent<T> {
  animationName: string;
  elapsedTime: number;
  pseudoElement: string;
}

export const Name = () => {
  const { nameAnimationEnd, setNameAnimationEnd } =
    useAnimation();

  useEffect(() => {
    // disable scroll during 1at main animation
    const disableScrollValue =
      sessionStorage.getItem('disableScroll');

    if (disableScrollValue != 'true') {
      disableScroll.on();
      sessionStorage.setItem('disableScroll', 'true');
    }
  }, []);

  const handleAnimationEnd = (
    e: AnimationEvent<HTMLDivElement>
  ) => {
    if (
      e.target instanceof HTMLElement &&
      e.target.dataset.animation === 'name'
    ) {
      setNameAnimationEnd(true);

      // show navbar during current session
      sessionStorage.setItem('nameAnimationDone', 'true');

      // show navbar during current session
      sessionStorage.setItem('showNav', 'true');

      // enable scroll
      disableScroll.off();
    }
  };

  return (
    <NameContainer
      nameAnimationDuration={`${nameAnimationDuration}s`}
      nameAnimationEnd={nameAnimationEnd}
    >
      <div
        className='name'
        data-animation='name'
        onAnimationEnd={handleAnimationEnd}
      >
        <div className='first-name'>
          <span className='first-name-1'>D</span>
          <span className='first-name-rest'>avid</span>
        </div>
        <div className='last-name'>
          <span className='last-name-1'>H</span>
          <span className='last-name-rest'>anenko</span>
          <span className='last-name-overlay'></span>
        </div>
      </div>
    </NameContainer>
  );
};
