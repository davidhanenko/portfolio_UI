import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { IMAGE_PLACEHOLDER } from '../../../config';
import { AboutImg } from './AboutImageStyles';

interface IAboutImageProps {
  imgUrl: string;
}

export const AboutImage: React.FC<IAboutImageProps> = ({
  imgUrl,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <AboutImg ref={ref} inView={inView}>
      <Image
        src={imgUrl}
        alt={'david hanenko image'}
        width={300}
        height={450}
        objectFit='cover'
        objectPosition='top'
        placeholder='blur'
        blurDataURL={IMAGE_PLACEHOLDER}
      />
    </AboutImg>
  );
};
