import Image from 'next/image';
import { RefObject, useEffect, useState } from 'react';

import { useAnimation } from '../../../../lib/useAnimation';

import { Element } from './BgElementStyles';

export interface IBgEl {
  bgRef: RefObject<HTMLDivElement>;
  el: any;
  key: number;
  intTime: number;
}

export const BgElement: React.FC<IBgEl> = ({
  el,
  bgRef,
  intTime,
}) => {
  const { nameAnimationEnd } = useAnimation();

  const [top, setTop] = useState<number>();
  const [left, setLeft] = useState<number>();

  useEffect(() => {
    const interval = setInterval(() => {
      if (bgRef && bgRef.current !== null) {
        setTop(Math.random() * bgRef.current?.offsetHeight);
        setLeft(Math.random() * bgRef.current?.offsetWidth);
      }
    }, intTime * 1000);
    return () => clearInterval(interval);
  }, [nameAnimationEnd, bgRef, intTime]);

  return (
    <Element
      nameAnimationEnd={nameAnimationEnd}
      int={`${intTime}s`}
      top={`${top}px`}
      left={`${left}px`}
    >
      <div className='tech-img'>
        {el && (
          <Image
            src={el?.url}
            alt={''}
            layout='fill'
            objectFit='scale-down'
          />
        )}
      </div>
    </Element>
  );
};
