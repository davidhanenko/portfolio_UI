import { useProjectsQuery } from '../../graphql/projects/projects.generated';
import { useScroll } from '../../lib/useScroll';
import Project from './project/Project';
import { ProjectsStyles } from './ProjectsStyles';

const Projects: React.FC = () => {
  const { data, loading, error } = useProjectsQuery();

  const projects = data?.projects?.data;

    const { scrollWithModal } =
      useScroll();

  if (loading) return <h3>Loading...</h3>;

  return (
    <ProjectsStyles scrollWithModal={scrollWithModal}>
      <h2>Projects</h2>
      {projects?.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </ProjectsStyles>
  );
};

export default Projects;
