import Image from 'next/image';
import { useRef } from 'react';
import { BgStyles } from './BgStyles';

import js from '../../../public/img/js.png';
import html from '../../../public/img/html.png';
import css from '../../../public/img/css.png';
import react from '../../../public/img/react.png';
import next from '../../../public/img/next.png';
import node from '../../../public/img/node.png';
import express from '../../../public/img/express.png';

export const Bg: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  let mix;

  console.log(bgRef.current);

  if (bgRef.current !== null) {
    mix = Math.random() * bgRef.current?.offsetHeight;
  }

  mix = `${mix}px` ?? '400px';

  console.log(`${mix}px`);

  return (
    <BgStyles mix={mix} ref={bgRef}>
      <span className='stack-img'>
        <Image
          src={html}
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
      </span>

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
