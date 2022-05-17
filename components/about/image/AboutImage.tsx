import Image from 'next/image';
import { AboutImageStyles } from './AboutImageStyles';

interface IAboutImageProps {
  imgUrl: string;
}

export const AboutImage: React.FC<IAboutImageProps> = ({
  imgUrl,
}) => {
  return (
    <AboutImageStyles>
      <div className='img-container'>
        <Image
          src={imgUrl}
          alt={''}
          width={300}
          height={300}
        />
        <div className='img-overlay-1'></div>
        <div className='img-overlay-2'></div>
      </div>
    </AboutImageStyles>
  );
};
