import Image from 'next/image';


import { MapImg } from './MapStyles';
import { RefObject } from 'react';

interface IMap {
  map: string;
  inView: boolean;
  mapRef: (node?: Element | null | undefined) => void;
}

export const Map: React.FC<IMap> = ({
  map,
  inView,
  mapRef,
}) => {

  return (
    <MapImg inView={inView} ref={mapRef}>
      {map && (
        <Image
          src={map}
          alt=''
          layout='fill'
        />
      )}
      <div className='pin'></div>
      <div className='pulse'></div>
    </MapImg>
  );
};
