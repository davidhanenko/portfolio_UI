import { CurrentProjectQuery } from '../../../graphql/current-project/current.generated';
import { ProjectDescriptionStyles } from './ProjectStyles';

interface IProjectDescriptionProps {
  inView: boolean;
  projectType: CurrentProjectQuery['currentProject']['data']['attributes']['project_type'];
  projectDescription: CurrentProjectQuery['currentProject']['data']['attributes']['description'];
  techUsed: CurrentProjectQuery['currentProject']['data']['attributes']['tech_used'];
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
