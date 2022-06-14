import {
  ProjectsQuery,
  ProjectsQueryVariables,
} from '../../../graphql/projects/projects.generated';
import { ProjectStyles } from './ProjectStyles';

interface IProjectProps {
  project: ProjectsQueryVariables;
}

const Project = ( { project }: IProjectProps ) => {
  
  return (
    <ProjectStyles>
      <h1>{project?.attributes?.title}</h1>
    </ProjectStyles>
  );
};

export default Project;
