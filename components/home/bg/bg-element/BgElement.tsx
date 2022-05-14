import Image from 'next/image';
import {
  SetStateAction,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  useAnimation,
  IAnimationState,
} from '../../../../lib/useAnimation';

import { BgElementStyles } from './BgElementStyles';

export interface IBgProps {
  top?: number;
  setTop?: (top: number) => void;
  left?: number;
  setLeft?: (left: number) => void;
  int?: number;
  setInt?: (int: number) => void;
  el?: any;
  index?: number;
  bgRef?: any;
  key?: any;
  intTime?: number;
  techImages: any[];
  a: string;
}

interface AnimationEvent<T = Element>
  extends SyntheticEvent<T> {
  animationName: string;
  elapsedTime: number;
  pseudoElement: string;
}

export const BgElement: React.FC<IBgProps> = ({
  el,
  bgRef,
  index,
}) => {
  const { animateBg } = useAnimation();

  const [top, setTop] = useState<number>();
  const [left, setLeft] = useState<number>();

  let intTime: SetStateAction<number | undefined> = index;

  
  useEffect(() => {
    const interval = setInterval(() => {
      if (bgRef.current !== null) {
        setTop(Math.random() * bgRef.current?.offsetHeight);
        setLeft(Math.random() * bgRef.current?.offsetWidth);
      }
    }, intTime * 1000);
    return () => clearInterval(interval);
  }, [animateBg]);

  return (
    <BgElementStyles
      animateBg={animateBg}
      int={`${intTime}s`}
      top={`${top}px`}
      left={`${left}px`}
    >
      <div className='tech-img' data-animation='tech-img'>
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
