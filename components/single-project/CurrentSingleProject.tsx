import { useEffect } from 'react';

import Slider from './slider/Slider';
import ProjectDescription from './project-description/ProjectDescription';
import ProjectHeader from './project-header/ProjectHeader';
import TechsUsed from './techs-used/TechsUsed';

import { CurrentSingleProjectStyles } from './CurrentSingleProjectStyles';
import { CurrentSingleProjectQuery } from '../../graphql/current-project/currentSingle.generated';

export interface ICurrentSingleProjectProps {
  currentProject: CurrentSingleProjectQuery['currentProject'];
}

type ParagraphProps = {
  id: string;
  header: string;
  text: string;
};

const CurrentSingleProject: React.FC<
  ICurrentSingleProjectProps
> = ({ currentProject }) => {
  // show navbar during current session
  useEffect(() => {
    sessionStorage.setItem('showNav', 'true');
  }, []);

  const sliderImages =
    currentProject?.data?.attributes?.images?.data;

  // Transform the sliderImages to match the structure expected by ISlidesProps
  const transformedSliderImages = sliderImages
    ? sliderImages.map(slide => ({
        url: slide.attributes?.url || '',
        height: slide.attributes?.height || 0,
      }))
    : [];

  const todoList = currentProject?.data?.attributes
    ?.todo as ParagraphProps[];

  return (
    <CurrentSingleProjectStyles>
      <section className='image-slider-section'>
        <div className='image-slider'>
          {sliderImages && sliderImages.length > 0 && (
            <Slider slides={transformedSliderImages} />
          )}
        </div>
      </section>
      <section className='project-description'>
        {currentProject && (
          <ProjectHeader
            title={currentProject?.data?.attributes?.title!}
            link={currentProject?.data?.attributes?.link!}
            linkGit={
              currentProject?.data?.attributes?.link_git!
            }
          />
        )}

        <ProjectDescription
          description={
            currentProject?.data?.attributes
              ?.full_description
          }
          features={
            currentProject?.data?.attributes?.features
          }
        >
          <div className='todo-section'>
            <h3>Todo list</h3>
            <ul className='todo-list'>
              {todoList &&
                todoList?.length > 0 &&
                todoList?.map(todo => (
                  <li key={todo?.id}>
                    <div className='todo-header'>
                      <span className='marker'>🟩</span>
                      <h5>{todo?.header}</h5>
                    </div>
                    <p>{todo?.text}</p>
                  </li>
                ))}
            </ul>
          </div>
        </ProjectDescription>

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
