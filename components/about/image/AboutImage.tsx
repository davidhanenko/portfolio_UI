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
      <div className='img-wrapper'>
        <Image
          src={imgUrl}
          alt={''}
          width={300}
          height={300}
        />
      </div>
    </AboutImageStyles>
  );
};
