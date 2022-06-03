import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import { GoLocation } from 'react-icons/go';

import { MapStyles } from './MapStyles';

interface IMap {
  map: string;
}

export const Map: React.FC<IMap> = ({ map }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <MapStyles inView={inView} ref={ref}>
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
