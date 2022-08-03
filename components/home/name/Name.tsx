import { SyntheticEvent } from 'react';
import { NameContainer } from './NameStyles';

import { useAnimation } from '../../../lib/useAnimation';

import { NAME_ANIMATION_DURATION as nameAnimationDuration } from '../../../config';

import disableScroll from 'disable-scroll';

interface AnimationEvent<T = Element>
  extends SyntheticEvent<T> {
  animationName: string;
  elapsedTime: number;
  pseudoElement: string;
}

export const Name = () => {
  const { setNameAnimationEnd } = useAnimation();
  // disable scroll during main animation
  // disableScroll.on();

  const handleAnimationEnd = (
    e: AnimationEvent<HTMLDivElement>
  ) => {
    if (
      e.target instanceof HTMLElement &&
      e.target.dataset.animation === 'name'
    )
      setNameAnimationEnd(true);

    // enable scroll
    setTimeout(() => {
      disableScroll.off();
    }, nameAnimationDuration * 1000);
  };

  return (
    <NameContainer
      nameAnimationDuration={`${nameAnimationDuration}s`}
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
