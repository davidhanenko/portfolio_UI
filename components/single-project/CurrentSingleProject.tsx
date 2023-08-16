import { useEffect } from 'react';

import Slider from './slider/Slider';
import ProjectDescription from './project-description/ProjectDescription';
import ProjectHeader from './project-header/ProjectHeader';
import TechsUsed from './techs-used/TechsUsed';
import { CurrentProjectQuery } from '../../graphql/current-project/current.generated';
import { CurrentSingleProjectStyles } from './CurrentSingleProjectStyles';

export interface ICurrentSingleProjectProps {
  currentProject: CurrentProjectQuery['currentProject'];
}

const CurrentSingleProject: React.FC<
  ICurrentSingleProjectProps
  > = ( { currentProject } ) => {
  
  // show navbar during current session
  useEffect(() => {
    sessionStorage.setItem('showNav', 'true');
  }, []);

  const sliderImages =
    currentProject?.data?.attributes?.images?.data;


  return (
    <CurrentSingleProjectStyles>
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
          title={currentProject?.data?.attributes?.title!}
          link={currentProject?.data?.attributes?.link!}
          linkGit={
            currentProject?.data?.attributes?.link_git!
          }
        />

        <ProjectDescription
          description={
            currentProject?.data?.attributes
              ?.full_description
          }
          features={
            currentProject?.data?.attributes?.features
          }
        />

        <TechsUsed
          techs={
            currentProject?.data?.attributes?.tech_used
          }
          inView={false}
        />
      </section>
    </CurrentSingleProjectStyles>
  );
};

export default CurrentSingleProject;
