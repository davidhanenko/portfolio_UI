import Image from 'next/image';
import {
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { BgElStyles, BgStyles } from './BgStyles';

import js from '../../../public/img/js.png';
import html from '../../../public/img/html.png';
import css from '../../../public/img/css.png';
import react from '../../../public/img/react.png';
import next from '../../../public/img/next.png';
import node from '../../../public/img/node.png';
import express from '../../../public/img/express.png';

const arr = [js, html, css, react, next, node, express];

export interface IBgProps {
  top: number;
  setTop: (top: number) => void;
  left: number;
  setLeft: (left: number) => void;
  el: any;
  i: number;
  bgRef: any;
}

const BgEl: React.FC<IBgProps> = ({ el, bgRef }) => {
  const [top, setTop] = useState<number>();
  const [left, setLeft] = useState<number>();

  useEffect(() => {
    const interval = setInterval(() => {
      if (bgRef.current !== null) {
        setTop(Math.random() * bgRef.current?.offsetHeight);
        setLeft(Math.random() * bgRef.current?.offsetWidth);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BgElStyles top={`${top}px`} left={`${left}px`}>
      <Image
        src={el.src}
        alt={'html'}
        width={35}
        height={35}
      />
    </BgElStyles>
  );
};

export const Bg: React.FC<IBgProps> = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  // const [top, setTop] = useState<number>();
  // const [left, setLeft] = useState<number>();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (bgRef.current !== null) {
  //       setTop(Math.random() * bgRef.current?.offsetHeight);
  //       setLeft(Math.random() * bgRef.current?.offsetWidth);
  //     }
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <BgStyles ref={bgRef}>
      {arr.map((el, i) => {
        return <BgEl bgRef={bgRef} key={i} i={i} el={el} />;
      })}

      {/*  <span className='stack-img'>
        <Image
          src={arr[0].src}
          alt={'html'}
          width={35}
          height={35}
        />
      </span>
    
      <span className='stack-img'>
        <Image src={html} alt={''} width={35} height={35} />
      </span>
      <span className='stack-img'>
        <Image src={css} alt={''} width={35} height={35} />
      </span> */}

      {/* <Image src={react} alt={''} width={50} height={35} />
      <Image src={next} alt={''} width={35} height={35} />
      <Image src={node} alt={''} width={35} height={35} />
      <Image
        src={express}
        alt={''}
        width={35}
        height={55}
      /> */}
    </BgStyles>
  );
};
