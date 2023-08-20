import {
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';

import { ProjectHeaderStyles } from './ProjectHeaderStyles';

type ProjectHeaderProps = {
  title: string;
  link: string;
  linkGit: string;
};

const ProjectHeader = ({
  title,
  link,
  linkGit,
}: ProjectHeaderProps) => {
  return (
    <ProjectHeaderStyles>
      <h2>{title}</h2>
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
    </ProjectHeaderStyles>
  );
};

export default ProjectHeader;
