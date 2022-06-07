import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import { GoLocation } from 'react-icons/go';

import { MapStyles } from './MapStyles';
import { RefObject } from 'react';

interface IMap {
  map: string;
  inView: boolean;
  mapRef: object;
}

export const Map: React.FC<IMap> = ({
  map,
  inView,
  mapRef,
}) => {
  // const { ref, inView } = useInView({
  //   threshold: 0.5,
  // });

  return (
    <MapStyles inView={inView} ref={mapRef}>
      <GoLocation className='icon' />
      {map && (
        <Image
          src={map}
          alt=''
          layout='fill'
          objectFit='cover'
        />
      )}
      <div className='pin'></div>
      <div className='pulse'></div>
    </MapStyles>
  );
};
