import { useExperimentsQuery } from '../../graphql/experiments/experiments.generated';
import {
  ProjectsQuery,
  useProjectsQuery,
} from '../../graphql/projects/projects.generated';
import { useScroll } from '../../lib/useScroll';
import Experiment from './experiment/Experiment';
import Project from './project/Project';
import { ProjectsContainer } from './ProjectsStyles';

interface IProjectsProps {
  project: ProjectsQuery;
}

const Projects: React.FC<IProjectsProps> = () => {
  const { data: projectsData } = useProjectsQuery();
  const { data: experimentsData } = useExperimentsQuery();

  const projects = projectsData?.projects?.data;
  const experiments = experimentsData?.experiments?.data;

  const { scrollWithModal } = useScroll();

  return (
    <ProjectsContainer scrollWithModal={scrollWithModal}>
      <h2>Projects</h2>
      {projects &&
        projects.map(project => (
          <Project key={project.id} project={project} />
        ))}

      <h3>Experiments</h3>
      <section className='experiments-wrapper'>
        {experiments &&
          experiments.map(experiment => (
           
            <Experiment
              key={experiment.id}
              experiment={experiment}
            />
          ))}
      </section>
    </ProjectsContainer>
  );
};

export default Projects;
