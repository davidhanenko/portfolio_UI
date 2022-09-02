import Image from 'next/image';
import { IMAGE_PLACEHOLDER } from '../../../config';
import {
  ExperimentContainer,
  Overlay,
  Title,
} from './ExperimentStyles';

const Experiment: React.FC = ({ experiment }) => {
  const imageUrl =
    experiment?.attributes?.image?.data?.attributes?.url;
  const title = experiment?.attributes?.title;

  return (
    <ExperimentContainer>
      <div className='image-wrapper'>
        <Overlay>
          <p>{experiment?.attributes?.description}</p>
        </Overlay>
        <Image
          src={imageUrl}
          alt={title}
          width={450}
          height={250}
          objectFit='cover'
          placeholder='blur'
          blurDataURL={IMAGE_PLACEHOLDER}
        />
        <Title>{title}</Title>
      </div>
    </ExperimentContainer>
  );
};

export default Experiment;
