import { RefObject } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import ProjectDescription from '../project/ProjectDescription';
import ProjectHeader from '../project/ProjectHeader';
import { CurrentProjectStyles } from './CurrentProjectStyles';
import {
  CurrentProjectQuery,
  useCurrentProjectQuery,
} from '../../../graphql/current-project/current.generated';
import { IMAGE_PLACEHOLDER } from '../../../config';

interface ICurrentProjectProps {
  inView: boolean;
}

const CurrentProject: React.FC<
  ICurrentProjectProps
> = () => {
  const { data, loading } = useCurrentProjectQuery();

  const currentProject = data?.currentProject?.data;

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const imageUrl =
    currentProject?.attributes?.main_image?.data?.attributes
      ?.url;

  const projectTitle = currentProject?.attributes?.title;

  if (loading) {
    return (
      <div>
        {' '}
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <CurrentProjectStyles ref={ref} inView={inView}>
      <div className='project-wrapper'>
        <ProjectHeader
          inView={inView}
          projectTitle={projectTitle}
          linkGit={currentProject?.attributes?.link_git}
          link={currentProject?.attributes?.link}
          projectId={currentProject?.id}
        />

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
