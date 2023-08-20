import ReactMarkdown from 'react-markdown';

import { SingleProjectQuery } from '../../../graphql/projects/singleProject.generated';
import { ProjectDescriptionStyles } from './ProjectDescriptionStyles';

interface IProjectDescriptionProps {
  description: SingleProjectQuery['project']['data']['attributes']['full_description'];
  features: SingleProjectQuery['project']['data']['attributes']['features'];
  children?: React.ReactNode;
}

type ParagraphProps = {
  id: string;
  header: string;
  text: string;
};

const ProjectDescription: React.FC<
  IProjectDescriptionProps
> = ({ description, features, children }) => {
  return (
    <ProjectDescriptionStyles>
      <div className='description'>
        {description &&
          description.length > 0 &&
          description.map((paragraph: ParagraphProps) => (
            <div
              key={paragraph.id}
              className='description-paragraph'
            >
              <h5>{paragraph.header}</h5>

              <ReactMarkdown>
                {paragraph.text}
              </ReactMarkdown>
            </div>
          ))}
      </div>

      <div className='features'>
        <h3>Key features</h3>
        {features &&
          features.length > 0 &&
          features.map((feature: ParagraphProps) => (
            <div
              key={feature.id}
              className='feature-paragraph'
            >
              <div className='feature-header'>
                <span className='marker'>⭐️</span>
                <h5>{feature.header}</h5>
              </div>
              <div className='feature-text'>
                <ReactMarkdown>
                  {feature.text}
                </ReactMarkdown>
              </div>
            </div>
          ))}
      </div>

      {children}
    </ProjectDescriptionStyles>
  );
};

export default ProjectDescription;
