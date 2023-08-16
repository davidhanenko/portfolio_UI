import { RefObject } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import ProjectDescription from '../project/ProjectDescription';
import ProjectHeader from '../project/ProjectHeader';
import { CurrentProjectStyles } from './CurrentProjectStyles';
import { useCurrentProjectQuery } from '../../../graphql/current-project/current.generated';
import { IMAGE_PLACEHOLDER } from '../../../config';
import { LoaderPuff } from '../../shared/loaders/Puff';

const CurrentProject: React.FC = () => {
  const { data, loading } = useCurrentProjectQuery();

  const currentProject = data?.currentProject?.data;
  const status = currentProject?.attributes?.status;
  const progress = currentProject?.attributes?.progress;

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const imageUrl =
    currentProject?.attributes?.main_image?.data?.attributes
      ?.url;

  const projectTitle = currentProject?.attributes?.title;

  if (loading) {
    return <LoaderPuff />;
  }

  if (!currentProject) return null;

  return (
    <CurrentProjectStyles
      ref={ref}
      inView={inView}
      progress={progress!}
    >
      <p className='top-line'>current</p>
      <div className='project-wrapper'>
        <div className='header-wrapper'>
          <ProjectHeader
            inView={inView}
            projectTitle={projectTitle}
            linkGit={currentProject?.attributes?.link_git}
            link={currentProject?.attributes?.link}
            slug={'current-project'}
          >
            {' '}
            <div className='project-status'>
              <div>
                <p>Status:</p>
                <p>{currentProject?.attributes?.status} </p>
                <p>{status === 'done' ? '!' : '...'}</p>
              </div>

              <div className='project-progress'>
                <div className='progress-bar'></div>
                <div className='progress'>{progress}%</div>
              </div>
            </div>{' '}
          </ProjectHeader>
        </div>

        <div className='project-body'>
          <div className='project-img'>
            <Image
              src={imageUrl!}
              alt={projectTitle!}
              layout='fill'
              placeholder='blur'
              blurDataURL={IMAGE_PLACEHOLDER}
            />

            {imageUrl && (
              <ProjectDescription
                inView={inView}
                projectType={
                  currentProject?.attributes?.project_type
                }
                projectDescription={
                  currentProject?.attributes?.description
                }
                techUsed={
                  currentProject?.attributes?.tech_used
                }
              />
            )}
          </div>
        </div>
      </div>
    </CurrentProjectStyles>
  );
};

export default CurrentProject;
