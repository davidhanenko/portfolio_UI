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

  const todoList = currentProject?.data?.attributes?.todo;

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
        >
          <h3 className='todo-head'>Todo list</h3>

          <ul>
            {todoList &&
              todoList?.length > 0 &&
              todoList?.map(todo => (
                <li className='todo-item' key={todo?.id}>
                  <p className='todo-text'>{todo?.text}</p>
                </li>
              ))}
          </ul>
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
