import { useRef } from 'react';
import { BgContainer } from './BgStyles';
import { BgElement } from './bg-element/BgElement';

interface IBg {
  techImages: any[];
}

export const Bg: React.FC<IBg> = ({ techImages }) => {
  const bgRef = useRef<HTMLDivElement>(null);

  return (
    <BgContainer ref={bgRef}>
      {techImages?.map((el, index) => {
        return (
          <BgElement
            bgRef={bgRef}
            key={index}
            intTime={index+2}
            el={el}
          />
        );
      })}
    </BgContainer>
  );
};
