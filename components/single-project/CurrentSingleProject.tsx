import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

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

  if (!currentProject) return null;

  return (
    <CurrentSingleProjectStyles>
      <section className='image-slider-section'>
        <div className='image-slider'>
          {sliderImages?.length ? (
            <Slider slides={transformedSliderImages} />
          ) : null}
        </div>
      </section>
      <section className='project-description'>
        {currentProject ? (
          <ProjectHeader
            title={currentProject?.data?.attributes?.title!}
            link={currentProject?.data?.attributes?.link!}
            linkGit={
              currentProject?.data?.attributes?.link_git!
            }
          />
        ) : null}

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
            <h3>Upcoming features</h3>
            <ul className='todo-list'>
              {todoList?.length
                ? todoList?.map(todo => (
                    <li key={todo?.id}>
                      <div className='todo-header'>
                        <span className='marker'>🟩</span>
                        <h5>{todo?.header}</h5>
                      </div>
                      <div className='todo-text'>
                        <ReactMarkdown>
                          {todo?.text}
                        </ReactMarkdown>
                      </div>
                    </li>
                  ))
                : null}
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
