import Image from 'next/image';
import { RefObject, useEffect, useState } from 'react';

import { useAnimation } from '../../../../lib/useAnimation';

import { Element } from './BgElementStyles';

export interface IBgEl {
  bgRef: RefObject<HTMLDivElement>;
  el: any;
  key: number;
  intTime: number;
  bgInView: boolean;
}

export const BgElement: React.FC<IBgEl> = ({
  el,
  bgRef,
  intTime,
  bgInView,
}) => {
  const { nameAnimationEnd } = useAnimation();

  const [top, setTop] = useState<number>();
  const [left, setLeft] = useState<number>();

  useEffect(() => {
    const interval = setInterval(() => {
      if (bgRef && bgRef.current !== null && bgInView) {
        setTop(Math.random() * bgRef.current?.offsetHeight);
        setLeft(Math.random() * bgRef.current?.offsetWidth);
      }
    }, intTime * 1000);
    return () => clearInterval(interval);
  }, [el, bgInView, intTime, bgRef]);

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
            src={el?.tech_logo?.data?.attributes?.url}
            alt={''}
            layout='fill'
            objectFit='scale-down'
          />
        )}
      </div>
    </Element>
  );
};
