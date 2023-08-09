import { ProjectDescriptionStyles } from './ProjectStyles';

interface IProjectDescriptionProps {
  inView: boolean;
  projectType: string;
  projectDescription: string;
  techUsed: [id: number, tech_title: string];
}

const ProjectDescription: React.FC<
  IProjectDescriptionProps
> = ({
  inView,
  projectType,
  projectDescription,
  techUsed,
}) => {
  return (
    <ProjectDescriptionStyles inView={inView}>
      <div className='description-wrapper'>
        <div className='project-type'>
          <p>{projectType}</p>
        </div>
        <p className='project-description'>
          {projectDescription}
        </p>

        <ul>
          {techUsed?.map((tech: any) => (
            <li key={tech.id}>{tech.tech_title}</li>
          ))}
        </ul>
      </div>
    </ProjectDescriptionStyles>
  );
};

export default ProjectDescription;
