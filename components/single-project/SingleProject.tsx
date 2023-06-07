import { SingleProjectQuery } from '../../graphql/projects/singleProject.generated';
import { SingleProjectStyles } from './SingleProjectStyles';
import Slider from '../projects/project/modal/slider/Slider';
import {
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';

interface ISingleProjectProps {
  project: SingleProjectQuery['project'];
}

const SingleProject: React.FC<ISingleProjectProps> = ({
  project,
}) => {
  const sliderImages =
    project?.data?.attributes?.images?.data;

  return (
    <SingleProjectStyles>
      <section className='image-slider-section'>
        <div className='image-slider'>
          {sliderImages !== undefined &&
            sliderImages.length > 0 && (
              <Slider
                slides={sliderImages}
                showModal={false}
              />
            )}
        </div>
      </section>
      <section className='project-description'>
        <div className='project-header'>
          <h2>{project?.data?.attributes?.title}</h2>
          <div className='outer-links'>
            {project?.data?.attributes?.link && (
              <a
                href={project?.data?.attributes.link}
                target='_blank'
                rel='noreferrer'
                data-tooltip='Visit'
              >
                <FaExternalLinkAlt />
              </a>
            )}
            {project?.data?.attributes?.link_git && (
              <a
                href={project?.data?.attributes.link_git}
                target='_blank'
                rel='noreferrer'
                data-tooltip='Code'
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </section>
    </SingleProjectStyles>
  );
};

export default SingleProject;
