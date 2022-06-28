import { useProjectsQuery } from '../../graphql/projects/projects.generated';
import Project from './project/Project';
import { ProjectsStyles } from './ProjectsStyles';

const Projects: React.FC = () => {
  const { data, loading, error } = useProjectsQuery();

  const projects = data?.projects?.data;


  return (
    <ProjectsStyles>
      <h2>Projects</h2>
      {projects?.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </ProjectsStyles>
  );
};

export default Projects;
