import { RefObject, useRef } from 'react';
import { BgStyles } from './BgStyles';
import { BgElement } from './bg-element/BgElement';

interface IBgProps {
  techImages: any[];
  bgRef: RefObject<HTMLDivElement>;
  key: number;
  intTime: number;
  el: any;
}

export const Bg: React.FC<IBgProps> = ({ techImages }) => {
  const bgRef = useRef<HTMLDivElement>(null);

  return (
    <BgStyles ref={bgRef}>
      {techImages?.map((el, index) => {
        return (
          <BgElement
            bgRef={bgRef}
            key={index}
            intTime={index + 2}
            el={el?.tech_logo?.data?.attributes}
          />
        );
      })}
    </BgStyles>
  );
};
