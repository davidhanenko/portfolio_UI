import Image from 'next/image';
import {
  ProjectsQuery,
  ProjectsQueryVariables,
} from '../../../graphql/projects/projects.generated';
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
      </div>
      {/* <h1>{project?.attributes?.title}</h1> */}
    </ProjectStyles>
  );
};

export default Project;
