import {
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
} from 'react-icons/fa';
import { CgFileDocument } from 'react-icons/cg';
import { MediaStyles } from './MediaStyles';
import { useMediaLinksQuery } from '../../graphql/media-links/links.generated';
import Link from 'next/link';

const Media: React.FC = () => {
  const { data, loading, error } = useMediaLinksQuery();

  const linkedin =
    data?.mediaLink?.data?.attributes?.linkedin;
  const github = data?.mediaLink?.data?.attributes?.github;
  const facebook =
    data?.mediaLink?.data?.attributes?.facebook;
  const resume = data?.mediaLink?.data?.attributes?.resume;


  if (loading) return <h3>Loading...</h3>;

  return (
    <MediaStyles>
      <Link href={linkedin!}>
        <a target='_blank'>
          <FaLinkedin />
        </a>
      </Link>
      <Link href={github!}>
        <a target='_blank'>
          <FaGithub />
        </a>
      </Link>
      <Link href={facebook!}>
        <a target='_blank'>
          <FaFacebookSquare />
        </a>
      </Link>
      <Link href={resume!}>
        <a target='_blank'>
          <CgFileDocument />
        </a>
      </Link>
    </MediaStyles>
  );
};

export default Media;
