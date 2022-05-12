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
  intTime?: number;
  techImages: any[];
}

export const BgElement: React.FC<IBgProps> = ({
  el,
  bgRef,
  index,
}) => {
  const { animateBg } = useAnimation();

  const [top, setTop] = useState<number>();
  const [left, setLeft] = useState<number>();
  const [int, setInt] = useState<number>();

  let intTime: SetStateAction<number | undefined> =
    index + 1;

  console.log(el.url);

  useEffect(() => {
    // setInt(intTime);
    const interval = setInterval(() => {
      if (bgRef.current !== null) {
        setTop(Math.random() * bgRef.current?.offsetHeight);
        setLeft(Math.random() * bgRef.current?.offsetWidth);
      }
    }, intTime * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BgElementStyles
      animateBg={animateBg}
      int={`${intTime}s`}
      top={`${top}px`}
      left={`${left}px`}
    >
      <Image src={el.url} alt={''} width={55} height={55} />
    </BgElementStyles>
  );
};
