import { RefObject } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import { IMAGE_PLACEHOLDER } from '../../../config';

import { ProjectsQuery } from '../../../graphql/projects/projects.generated';
import ProjectHeader from './ProjectHeader';
import ProjectDescription from './ProjectDescription';
import { ProjectContainer } from './ProjectStyles';

interface IProjectProps {
  inView: boolean;
  isSlide: boolean;
  projectRef: RefObject<HTMLDivElement> | undefined;
  project: ProjectsQuery | any;
}

const Project: React.FC<IProjectProps> = ({ project }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const imageUrl =
    project?.attributes?.main_image?.data?.attributes?.url;

  const projectTitle = project?.attributes?.title;

  return (
    <ProjectContainer ref={ref} inView={inView}>
      <div className='project-wrapper'>
        <ProjectHeader
          inView={inView}
          projectTitle={projectTitle}
          linkGit={project?.attributes?.link_git}
          link={project?.attributes?.link}
          projectId={project?.id}
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
                  project?.attributes?.project_type
                }
                projectDescription={
                  project?.attributes?.description
                }
                techUsed={project?.attributes?.tech_used}
              />
            )}
          </div>
        </div>
      </div>
    </ProjectContainer>
  );
};

export default Project;
