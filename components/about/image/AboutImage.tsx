import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
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
        width={350}
        height={350}
        objectFit='cover'
        objectPosition='top'
      />
    </AboutImg>
  );
};
