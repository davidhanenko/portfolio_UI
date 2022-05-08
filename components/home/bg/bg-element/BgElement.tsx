import Image from 'next/image';
import { SetStateAction, useEffect, useState } from 'react';

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
  intTime: number;
}

type Props = IBgProps & IAnimationState;

export const BgElement: React.FC<IBgProps> = ({
  el,
  bgRef,
  index,
}) => {
  const { animateGreet } = useAnimation();

  const [top, setTop] = useState<number>();
  const [left, setLeft] = useState<number>();
  const [int, setInt] = useState<number>();

  let intTime: SetStateAction<number | undefined>;

  intTime = ((index + 1) * 1000) / 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      if (bgRef.current !== null) {
        setTop(Math.random() * bgRef.current?.offsetHeight);
        setLeft(Math.random() * bgRef.current?.offsetWidth);
      }
      setInt(intTime);
    }, intTime * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BgElementStyles
      int={`${int}s`}
      top={`${top}px`}
      left={`${left}px`}
      a={animateGreet}
    >
      <Image
        src={el.src}
        alt={'html'}
        width={55}
        height={55}
      />
    </BgElementStyles>
  );
};
