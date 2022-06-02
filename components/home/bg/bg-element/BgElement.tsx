import Image from 'next/image';
import { RefObject, useEffect, useState } from 'react';

import { useAnimation } from '../../../../lib/useAnimation';

import { BgElementStyles } from './BgElementStyles';

export interface IBgEl {
  top?: number;
  setTop?: (top: number) => void;
  left?: number;
  setLeft?: (left: number) => void;
  int?: number;
  setInt?: (int: number) => void;
  el?: any;
  index?: number;
  bgRef?: RefObject<HTMLDivElement>;
  key?: number;
  intTime: number;
}

export const BgElement: React.FC<IBgEl> = ({
  el,
  bgRef,
  intTime,
}) => {
  const { animateBg } = useAnimation();

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
  }, [animateBg, bgRef, intTime]);

  return (
    <BgElementStyles
      animateBg={animateBg}
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
    </BgElementStyles>
  );
};
