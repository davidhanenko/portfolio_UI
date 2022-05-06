import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BgElementStyles } from './BgElementStyles';

export interface IBgProps {
  top?: number;
  setTop?: (top: number) => void;
  left?: number;
  setLeft?: (left: number) => void;
  el: any;
  index: number;
  bgRef: any;
}

export const BgElement: React.FC<IBgProps> = ({
  el,
  bgRef,
  index,
}) => {
  const [top, setTop] = useState<number>();
  const [left, setLeft] = useState<number>();

  useEffect(() => {
    const interval = setInterval(() => {
      if (bgRef.current !== null) {
        setTop(Math.random() * bgRef.current?.offsetHeight);
        setLeft(Math.random() * bgRef.current?.offsetWidth);
      }
    }, (index + 1) * 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <BgElementStyles top={`${top}px`} left={`${left}px`}>
      <Image
        src={el.src}
        alt={'html'}
        width={55}
        height={55}
      />
    </BgElementStyles>
  );
};
