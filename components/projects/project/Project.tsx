import Image from 'next/image';
import {
  ProjectsQuery,
  ProjectsQueryVariables,
} from '../../../graphql/projects/projects.generated';

import {
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';

import { ProjectStyles } from './ProjectStyles';

interface IProjectProps {
  project: ProjectsQueryVariables;
}

const Project = ({ project }: IProjectProps) => {
  return (
    <ProjectStyles>
      <div className='project-img'>
        <Image
          src={
            project?.attributes?.main_image?.data
              ?.attributes?.url
          }
          alt={project?.attributes?.title}
          width={700}
          height={500}
        />

        <h3 className='project-title'>
          {project?.attributes?.title}
        </h3>

        <div className='project-description'>
          <p>{project?.attributes?.description}</p>
        </div>

        <div className='links'>
          <a
            href={project?.attributes?.link}
            target='_blank'
            rel='noreferrer'
          >
            <FaExternalLinkAlt />
          </a>
          <a
            href={project?.attributes?.link_git}
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </ProjectStyles>
  );
};

export default Project;
