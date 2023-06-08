import { SingleProjectQuery } from '../../../graphql/projects/singleProject.generated';
import { ProjectDescriptionStyles } from './ProjectDescriptionStyles';

interface IProjectDescriptionProps {
  description: SingleProjectQuery['project']['data']['attributes']['full_description'];
  features: SingleProjectQuery['project']['data']['attributes']['features'];
}

type Paragraph = {
  id: string;
  header: string;
  text: string;
};

const ProjectDescription: React.FC<
  IProjectDescriptionProps
> = ({ description, features }) => {
  return (
    <ProjectDescriptionStyles>
      <div className='description'>
        {description &&
          description.map((paragraph: Paragraph) => (
            <div
              key={paragraph.id}
              className='description-paragraph'
            >
              <h5>{paragraph.header}</h5>
              <p>{paragraph.text}</p>
            </div>
          ))}
      </div>

      <div className='features'>
        <h3>Some features</h3>
        {features &&
          features.map((feature: Paragraph) => (
            <div
              key={feature.id}
              className='feature-paragraph'
            >
              <div className='feature-header'>
                <span className='marker'>⭐️</span>
                <h5>{feature.header}</h5>
              </div>
              <p>{feature.text}</p>
            </div>
          ))}
      </div>
    </ProjectDescriptionStyles>
  );
};

export default ProjectDescription;
