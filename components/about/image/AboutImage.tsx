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
      <Image
        src={imgUrl}
        alt={''}
        width={350}
        height={350}
        objectFit='cover'
        objectPosition='top'
      />
    </AboutImg>
  );
};
