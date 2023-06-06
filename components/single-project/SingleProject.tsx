import { SingleProjectQuery } from '../../graphql/projects/singleProject.generated';
import { SingleProjectStyles } from './SingleProjectStyles';
import Slider from '../projects/project/modal/slider/Slider';


interface ISingleProjectProps {
  project: SingleProjectQuery['project'];
}

const SingleProject: React.FC<ISingleProjectProps> = ({
  project,
}) => {
  return (
    <SingleProjectStyles>
      <section className='image-slider-section'>
        <div className='image-slider'>
        
          <Slider
            slides={project?.data?.attributes?.images?.data}
            showModal={false}
          />
        </div>
      </section>
      <section className='project-description'>
        <div>
          <h2>{project?.data?.attributes?.title}</h2>
        </div>
      </section>
    </SingleProjectStyles>
  );
};

export default SingleProject;
