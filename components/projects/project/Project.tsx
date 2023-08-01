import { RefObject } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import {
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';

import {
  Description,
  ProjectContainer,
  ProjectHeader,
} from './ProjectStyles';

import { IMAGE_PLACEHOLDER } from '../../../config';
import { ProjectsQuery } from '../../../graphql/projects/projects.generated';

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
    <ProjectContainer
      ref={ref}
      inView={inView}
    >
      <div className='project-wrapper'>
        <ProjectHeader inView={inView}>
          <h4 className='project-title'>{projectTitle}</h4>

          <div className='project-links'>
            <a
              href={`/${project.id}`}
              className='view-more-btn'
            >
              View More
            </a>
            <div className='outer-links'>
              {project?.attributes.link && (
                <a
                  href={project?.attributes?.link}
                  target='_blank'
                  rel='noreferrer'
                  data-tooltip='Visit'
                >
                  <FaExternalLinkAlt />
                </a>
              )}
              {project?.attributes.link_git && (
                <a
                  href={project?.attributes.link_git}
                  target='_blank'
                  rel='noreferrer'
                  data-tooltip='Code'
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        </ProjectHeader>

        <div className='project-body'>
          <div
       
            className='project-img'
          >
            <Image
              src={imageUrl!}
              alt={projectTitle!}
              layout='fill'
              placeholder='blur'
              blurDataURL={IMAGE_PLACEHOLDER}
            />

            {imageUrl && (
              <Description inView={inView}>
                <div className='description-wrapper'>
                  <h5 className='project-type'>
                    {project?.attributes?.project_type}
                  </h5>

                  <p className='project-description'>
                    {project?.attributes?.description}
                  </p>

                  <ul>
                    {project?.attributes?.tech_used?.map(
                      (tech: any) => (
                        <li key={tech.id}>
                          {tech.tech_title}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </Description>
            )}
          </div>
        </div>

      </div>
    </ProjectContainer>
  );
};

export default Project;
