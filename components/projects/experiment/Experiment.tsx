import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';
import { IMAGE_PLACEHOLDER } from '../../../config';
import {
  ExperimentContainer,
  Overlay,
  Title,
} from './ExperimentStyles';
import { ExperimentsQuery } from '../../../graphql/experiments/experiments.generated';

interface IExperimentProps {
  experiment: {
    id?: string | null;
    attributes?: {
      __typename?: 'Experiment';
      title: string;
      link: string;
      link_git: string;
      description: string;
      image: {
        __typename?: 'UploadFileEntityResponse';
        data?: {
          __typename?: 'UploadFileEntity';
          attributes?: {
            __typename?: 'UploadFile';
            url: string;
          } | null;
        } | null;
      };
    } | null;
  };
}

const Experiment: React.FC<IExperimentProps> = ({
  experiment,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  const imageUrl =
    experiment?.attributes?.image?.data?.attributes?.url;
  const title = experiment?.attributes?.title;

  return (
    <ExperimentContainer ref={ref} inView={inView}>
      <div className='image-wrapper'>
        <Overlay>
          <div className='links'>
            <a
              href={experiment?.attributes?.link}
              target='_blank'
              rel='noreferrer'
              data-tooltip={`Visit`}
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href={experiment?.attributes?.link_git}
              target='_blank'
              rel='noreferrer'
              data-tooltip='Code'
            >
              <FaGithub />
            </a>
          </div>
          <p>{experiment?.attributes?.description}</p>
        </Overlay>
        <Image
          src={imageUrl!}
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