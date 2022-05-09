import { useRef } from 'react';
import { BgStyles } from './BgStyles';
import {
  BgElement,
  IBgProps,
} from './bg-element/BgElement';

import js from '../../../public/img/js.png';
import html from '../../../public/img/html.png';
import css from '../../../public/img/css.png';
import react from '../../../public/img/react.png';
import next from '../../../public/img/next.png';
import node from '../../../public/img/node.png';
import express from '../../../public/img/express.png';

const arr = [js, html, css, react, next, node, express];

export const Bg: React.FC<IBgProps> = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  return (
    <BgStyles ref={bgRef}>
      {arr.map((el, index) => {
        return (
          <BgElement
            bgRef={bgRef}
            key={index}
            index={index  + 1}
            el={el}
            intTime={0}
          />
        );
      })}
    </BgStyles>
  );
};
