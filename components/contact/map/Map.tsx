import Image from 'next/image';

import { GoLocation } from 'react-icons/go';

import { MapStyles } from './MapStyles';

interface IMapProps {
  map: string;
}

export const Map: React.FC<IMapProps> = ({ map }) => {
  return (
    <MapStyles>
      <GoLocation className='icon'/>
      {map && (
        <Image
          src={map}
          alt=''
          layout='fill'
          objectFit='cover'
        />
      )}
      <div className='img-overlay'></div>
    </MapStyles>
  );
};
