import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
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
}

export const BgElement: React.FC<IBgProps> = ({
  el,
  bgRef,
  index,
}) => {
  const [top, setTop] = useState<number>();
  const [left, setLeft] = useState<number>();
  const [int, setInt] = useState<number>();

let i = ((index + 1.5) * 1000) / 1000;

  // useEffect(() => {
  //   let i = ((index + 1) * 1000) / 1000;

  //   i >= 2
  //     ? setInt(((index + 1) * 1000) / 1000)
  //     : setInt(2 + ((index + 1) * 1000) / 1000);
  // }, []);

  // console.log(int);

console.log(i);

useEffect(() => {
    setInt( i );
    const interval = setInterval(() => {
      if (bgRef.current !== null) {
        setTop(Math.random() * bgRef.current?.offsetHeight);
        setLeft(Math.random() * bgRef.current?.offsetWidth);
      }
    }, (i * 1000));
    return () => clearInterval(interval);
  }, []);

  return (
    <BgElementStyles
      int={`${int}s`}
      top={`${top}px`}
      left={`${left}px`}
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
