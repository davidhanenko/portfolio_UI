import Image from 'next/image';
import { IMAGE_PLACEHOLDER } from '../../../config';

import { MapImg } from './MapStyles';

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
          alt='New York area map'
          layout='fill'
          // placeholder='blur'
          // blurDataURL={IMAGE_PLACEHOLDER}
        />
      )}
      <div className='pin'></div>
      <div className='pulse'></div>
    </MapImg>
  );
};
