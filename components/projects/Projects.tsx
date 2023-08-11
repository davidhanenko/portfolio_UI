import { useEffect } from 'react';
import { useExperimentsQuery } from '../../graphql/experiments/experiments.generated';
import { useProjectsQuery } from '../../graphql/projects/projects.generated';
import { useScroll } from '../../lib/useScroll';
import Experiment from './experiment/Experiment';
import Project from './project/Project';
import { ProjectsContainer } from './ProjectsStyles';
import CurrentProject from './current/CurrentProject';

const Projects: React.FC = () => {
  const { data: projectsData } = useProjectsQuery();
  const { data: experimentsData } = useExperimentsQuery();

  const { scrollProjectsInView, setScrollProjectsInView } =
    useScroll();

  const projects = projectsData?.projects?.data;
  const experiments = experimentsData?.experiments?.data;

  useEffect(() => {
    const elem = document.getElementById('projects');

    if (scrollProjectsInView) {
      elem?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setTimeout(() => {
        setScrollProjectsInView(false);
      }, 2000);
    }
  }, [scrollProjectsInView, setScrollProjectsInView]);

  return (
    <ProjectsContainer id='projects'>
      <h2>Projects</h2>
      <CurrentProject inView={false} />
      <section className='projects-wrapper'>
        {projects !== undefined &&
          projects?.map(project => (
            <Project
              key={project.id}
              project={project}
              inView={false}
              projectRef={undefined}
              isSlide={false}
            />
          ))}
      </section>

      <section className='experiments-container'>
        <h3>Experiments</h3>
        <div className='experiments-wrapper'>
          {experiments &&
            experiments.map(experiment => (
              <Experiment
                key={experiment.id}
                experiment={experiment}
              />
            ))}
        </div>
      </section>
    </ProjectsContainer>
  );
};

export default Projects;
