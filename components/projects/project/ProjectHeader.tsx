import {
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';

import { ProjectHeaderStyles } from './ProjectStyles';

interface IProjectHeaderProps {
  inView: boolean;
  projectTitle: string;
  link: string;
  linkGit: string;
  projectId: string;
}

const ProjectHeader: React.FC<IProjectHeaderProps> = ({
  inView,
  projectTitle,
  link,
  linkGit,
  projectId,
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
    </ProjectHeaderStyles>
  );
};

export default ProjectHeader;
