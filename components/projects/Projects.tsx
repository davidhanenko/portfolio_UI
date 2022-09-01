import { useProjectsQuery } from '../../graphql/projects/projects.generated';
import { useScroll } from '../../lib/useScroll';
import Project from './project/Project';
import { ProjectsContainer } from './ProjectsStyles';

const Projects: React.FC = () => {
  const { data, loading, error } = useProjectsQuery();

  const projects = data?.projects?.data;

  const { scrollWithModal } = useScroll();

  return (
    <ProjectsContainer scrollWithModal={scrollWithModal}>
      <h2>Projects</h2>
      {projects &&
        projects?.map(project => (
          <Project key={project.id} project={project} />
        ))}
    </ProjectsContainer>
  );
};

export default Projects;
