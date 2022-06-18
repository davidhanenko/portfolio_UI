import Image from 'next/image';
import {
  ProjectsQuery,
  ProjectsQueryVariables,
} from '../../../graphql/projects/projects.generated';

import {
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';

import {
  DescriptionStyles,
  LinksStyles,
  ProjectStyles,
} from './ProjectStyles';

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
          // width={600}
          // height={450}
          layout='fill'
          objectFit='contain'
        />

        <h3 className='project-title'>
          {project?.attributes?.title}
        </h3>

        <DescriptionStyles>
          <p>{project?.attributes?.description}</p>
          <ul>
            {project?.attributes?.tech_used?.map(
              (tech: any) => (
                <li key={tech.id}>{tech.tech_title}</li>
              )
            )}
          </ul>
        </DescriptionStyles>

        <LinksStyles>
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
        </LinksStyles>
      </div>
    </ProjectStyles>
  );
};

export default Project;
