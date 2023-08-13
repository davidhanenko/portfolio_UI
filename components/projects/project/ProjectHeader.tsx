import {
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';

import { ProjectHeaderStyles } from './ProjectStyles';
import { CurrentProjectQuery } from '../../../graphql/current-project/current.generated';

interface IProjectHeaderProps {
  inView: boolean;
  projectTitle: CurrentProjectQuery['currentProject']['data']['attributes']['title'];
  link: CurrentProjectQuery['currentProject']['data']['attributes']['link'];
  linkGit: CurrentProjectQuery['currentProject']['data']['attributes']['link_git'];
  projectId: CurrentProjectQuery['currentProject']['data']['id'];
  children?: React.ReactNode;
}

const ProjectHeader: React.FC<IProjectHeaderProps> = ({
  inView,
  projectTitle,
  link,
  linkGit,
  projectId,
  children
}) => {
  return (
    <ProjectHeaderStyles inView={inView}>
      <h4 className='project-title'>{projectTitle}</h4>

      <div className='project-links'>
        <a href={`/${projectId}`} className='view-more-btn'>
          View More
        </a>
        <div className='outer-links'>
          {link && (
            <a
              href={link}
              target='_blank'
              rel='noreferrer'
              data-tooltip='Visit'
            >
              <FaExternalLinkAlt />
            </a>
          )}
          {linkGit && (
            <a
              href={linkGit}
              target='_blank'
              rel='noreferrer'
              data-tooltip='Code'
            >
              <FaGithub />
            </a>
          )}
        </div>
      </div>

      {children}
    </ProjectHeaderStyles>
  );
};

export default ProjectHeader;
