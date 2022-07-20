import Image from 'next/image';
import { AboutImg } from './AboutImageStyles';

interface IAboutImageProps {
  imgUrl: string;
}

export const AboutImage: React.FC<IAboutImageProps> = ({
  imgUrl,
}) => {
  return (
    <AboutImg>
      <figure className='img-container'>
        <Image
          src={imgUrl}
          alt={''}
          layout='fill'
          objectFit='cover'
          objectPosition='top'
        />
        <div className='img-overlay-1'></div>
        <div className='img-overlay-2'></div>
      </figure>
    </AboutImg>
  );
};
