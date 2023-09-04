import Link from 'next/link';
import {
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
} from 'react-icons/fa';
import { CgFileDocument } from 'react-icons/cg';
import ClipLoader from 'react-spinners/ClipLoader';

import { useMediaLinksQuery } from '../../../graphql/media-links/links.generated';
import { MediaStyles } from './MediaStyles';
import { useResumeQuery } from '../../../graphql/resume/resume.generated';

const Media: React.FC = () => {
  const { data, loading } = useMediaLinksQuery();

  const linkedin =
    data?.mediaLink?.data?.attributes?.linkedin;
  const github = data?.mediaLink?.data?.attributes?.github;
  const facebook =
    data?.mediaLink?.data?.attributes?.facebook;
  const resume =
    data?.mediaLink?.data?.attributes?.resume?.data
      ?.attributes?.url;

  if (loading)
    return (
      <MediaStyles>
        <ClipLoader
          color={'teal1'}
          loading={true}
          speedMultiplier={0.5}
        />
        <ClipLoader
          color={'teal1'}
          loading={true}
          speedMultiplier={0.5}
        />
        <ClipLoader
          color={'teal1'}
          loading={true}
          speedMultiplier={0.5}
        />
        <ClipLoader
          color={'teal1'}
          loading={true}
          speedMultiplier={0.5}
        />
      </MediaStyles>
    );

  return (
    <MediaStyles>
      {!!linkedin ? (
        <Link href={linkedin}>
          <a target='_blank' data-tooltip='LinkedIn'>
            <FaLinkedin />
          </a>
        </Link>
      ) : null}
      {!!github ? (
        <Link href={github}>
          <a target='_blank' data-tooltip='GitHub'>
            <FaGithub />
          </a>
        </Link>
      ) : null}
      {!!facebook ? (
        <Link href={facebook}>
          <a target='_blank' data-tooltip='Facebook'>
            <FaFacebookSquare />
          </a>
        </Link>
      ) : null}
      {!!resume ? (
        <Link href={resume}>
          <a download target='_blank' data-tooltip='Resume'>
            <CgFileDocument />
          </a>
        </Link>
      ) : null}
    </MediaStyles>
  );
};

export default Media;
