import { useRef } from 'react';

import { BgContainer } from './BgStyles';
import { BgElement } from './bg-element/BgElement';

interface IBg {
  techImages: any[];
  bgInView: boolean;
}

export const Bg: React.FC<IBg> = ({
  techImages,
  bgInView,
}) => {
  const bgRef = useRef<HTMLDivElement>(null);

  return (
    <BgContainer ref={bgRef}>
      {techImages?.map((el, index) => {
        return (
          <BgElement
            bgRef={bgRef}
            key={index}
            intTime={index + 2} //add 2 seconds to animation based on array indexes
            el={el}
            bgInView={bgInView}
          />
        );
      })}
    </BgContainer>
  );
};
