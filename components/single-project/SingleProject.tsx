import { SingleProjectQuery } from '../../graphql/projects/singleProject.generated';

import { SingleProjectStyles } from './SingleProjectStyles';
import ProjectDescription from './project-description/ProjectDescription';
import ProjectHeader from './project-header/ProjectHeader';
import Slider from './slider/Slider';
import TechsUsed from './techs-used/TechsUsed';

export interface ISingleProjectProps {
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
        <ProjectHeader
          title={project?.data?.attributes?.title!}
          link={project?.data?.attributes?.link!}
          linkGit={project?.data?.attributes?.link_git!}
        />

        <ProjectDescription
          description={
            project?.data?.attributes?.full_description
          }
          features={project?.data?.attributes?.features}
        />

        <TechsUsed
          techs={project?.data?.attributes?.tech_used}
        />
      </section>
    </SingleProjectStyles>
  );
};

export default SingleProject;
