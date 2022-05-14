import { useRef } from 'react';
import { BgStyles } from './BgStyles';
import {
  BgElement,
  IBgProps,
} from './bg-element/BgElement';

export const Bg: React.FC<IBgProps> = ({ techImages }) => {

  const bgRef = useRef<HTMLDivElement>(null);

  return (
    <BgStyles ref={bgRef}>
      {techImages?.map((el, index) => {
        return (
          <BgElement
            bgRef={bgRef}
            key={index}
            index={index + 1}
            el={el?.tech_logo?.data?.attributes}
            intTime={0}
          />
        );
      })}
    </BgStyles>
  );
};
