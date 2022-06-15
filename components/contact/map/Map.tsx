import Image from 'next/image';
import { useInView } from 'react-intersection-observer';


import { MapStyles } from './MapStyles';
import { RefObject } from 'react';

interface IMap {
  map: string;
  inView: boolean;
  mapRef: RefObject<HTMLDivElement>;
}

export const Map: React.FC<IMap> = ({
  map,
  inView,
  mapRef,
}) => {

  return (
    <MapStyles inView={inView} ref={mapRef}>
      {map && (
        <Image
          src={map}
          alt=''
          layout='fill'
        />
      )}
      <div className='pin'></div>
      <div className='pulse'></div>
    </MapStyles>
  );
};
