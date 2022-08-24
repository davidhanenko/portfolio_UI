import Link from 'next/link';
import {
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
} from 'react-icons/fa';
import { CgFileDocument } from 'react-icons/cg';
import ClipLoader from 'react-spinners/ClipLoader';

import { useMediaLinksQuery } from '../../graphql/media-links/links.generated';
import { MediaStyles } from './MediaStyles';

const Media: React.FC = () => {
  const { data, loading } = useMediaLinksQuery();

  const linkedin =
    data?.mediaLink?.data?.attributes?.linkedin;
  const github = data?.mediaLink?.data?.attributes?.github;
  const facebook =
    data?.mediaLink?.data?.attributes?.facebook;
  const resume = data?.mediaLink?.data?.attributes?.resume;

  if (loading)
    return (
      <MediaStyles>
        <ClipLoader
          color={'orange'}
          loading={true}
          speedMultiplier={0.5}
        />
        <ClipLoader
          color={'orange'}
          loading={true}
          speedMultiplier={0.5}
        />
        <ClipLoader
          color={'orange'}
          loading={true}
          speedMultiplier={0.5}
        />
        <ClipLoader
          color={'orange'}
          loading={true}
          speedMultiplier={0.5}
        />
      </MediaStyles>
    );

  return (
    <MediaStyles>
      <Link href={linkedin!}>
        <a target='_blank' data-tooltip='LinkedIn'>
          {loading ? (
            <MoonLoader
              color={'orange'}
              loading={true}
              size={10}
            />
          ) : (
            <FaLinkedin />
          )}
        </a>
      </Link>
      <Link href={github!}>
        <a target='_blank' data-tooltip='GitHub'>
          <FaGithub />
        </a>
      </Link>
      {facebook && (
        <Link href={facebook}>
          <a target='_blank' data-tooltip='Facebook'>
            <FaFacebookSquare />
          </a>
        </Link>
      )}
      <Link href={resume!}>
        <a target='_blank' data-tooltip='Resume'>
          <CgFileDocument />
        </a>
      </Link>
    </MediaStyles>
  );
};

export default Media;
