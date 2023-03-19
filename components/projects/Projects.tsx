import {
  useExperimentsQuery,
} from '../../graphql/experiments/experiments.generated';
import {
  useProjectsQuery,
} from '../../graphql/projects/projects.generated';
import Experiment from './experiment/Experiment';
import Project from './project/Project';
import { ProjectsContainer } from './ProjectsStyles';



const Projects: React.FC = () => {
  const { data: projectsData } = useProjectsQuery();
  const { data: experimentsData } = useExperimentsQuery();

  const projects = projectsData?.projects?.data;
  const experiments = experimentsData?.experiments?.data;


  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      <section className='projects-wrapper'>
        {projects !== undefined &&
          projects.map(project => (
            <Project
              key={project.id}
              project={project}
              inView={false}
              projectRef={undefined}
            />
          ))}
      </section>

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
