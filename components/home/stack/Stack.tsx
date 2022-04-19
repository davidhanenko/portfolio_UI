import Image from 'next/image';
import { StackStyles } from './StackStyles';

import js from '../../../public/img/js.png';
import html from '../../../public/img/html.png';
import css from '../../../public/img/css.png';
import react from '../../../public/img/react.png';
import nextjs from '../../../public/img/nextjs.png';
import node from '../../../public/img/node.png';
import express from '../../../public/img/express.png';

export const Stack: React.FC = () => {
  return (
    <StackStyles>
      <div className='top'>
        <Image src={js} alt={'js'} width={75} height={75} />
        <Image
          src={html}
          alt={'html'}
          width={75}
          height={75}
        />
        <Image
          src={css}
          alt={'css'}
          width={75}
          height={75}
        />
      </div>
      <div className='mid'>
        <div className='left'>
          <Image
            src={react}
            alt={'react'}
            width={100}
            height={55}
          />
          <Image
            src={nextjs}
            alt={'nextjs'}
            width={55}
            height={55}
          />
        </div>
        <div className='right'>
          <Image
            src={node}
            alt={'node'}
            width={55}
            height={55}
          />
          <Image
            src={express}
            alt={'express'}
            width={55}
            height={55}
          />
        </div>
      </div>
    </StackStyles>
  );
};
