import Image from 'next/image';

interface IAboutImageProps {
  imgUrl: string;
}

export const AboutImage: React.FC<IAboutImageProps> = ({
  imgUrl,
}) => {
  return (
    <div className='img-wrapper'>
      <Image
        src={imgUrl}
        alt={''}
        width={300}
        height={300}
      />
    </div>
  );
};
