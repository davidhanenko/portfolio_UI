import { useInView } from 'react-intersection-observer';

import { useProjectsQuery } from '../../graphql/projects/projects.generated';
import Project from './project/Project';
import { ProjectsStyles } from './ProjectsStyles';

const Projects: React.FC = () => {
  const { data, loading, error } = useProjectsQuery();

  const projects = data?.projects?.data;

  const { ref, inView } = useInView({
    // threshold: 0.5,
  });

  return (
    <ProjectsStyles>
      <h2>Projects</h2>
      {projects?.map(project => (
        <Project
          key={project.id}
          project={project}
          projectRef={ref}
          inView={inView}
        />
      ))}
    </ProjectsStyles>
  );
};

export default Projects;
