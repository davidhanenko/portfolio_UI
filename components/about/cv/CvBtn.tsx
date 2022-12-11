import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useResumeLazyQuery } from '../../../graphql/resume/resume.generated';
import { HeaderPlaceholder } from '../../shared/placeholder/HeaderPlaceholder';
import { PlaceholderWrapper } from '../../shared/placeholder/PlaceholderWrapper';
import {
  TextPlaceholder,
  TextPlLine,
} from '../../shared/placeholder/TextPlaceholder';
import { TitlePlaceholder } from '../../shared/placeholder/TitlePlaceholder';
import { CvBtnStyles } from './CvBtnStyles';

interface ICvBtnProps {
  inView: boolean;
  fileUrl?: string;
}

const DocumentPlaceholder = () => {
  return (
    <PlaceholderWrapper>
      <TitlePlaceholder />
      <TextPlLine />
      <HeaderPlaceholder />
      <TextPlaceholder />
      <HeaderPlaceholder />
      <TextPlaceholder />
      <HeaderPlaceholder />
      <TextPlaceholder />
      <HeaderPlaceholder />
      <TextPlaceholder />
    </PlaceholderWrapper>
  );
};

export const CvBtn: React.FC<ICvBtnProps> = ({
  inView,
}) => {
  const { ref: cvRef, inView: cvInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [loadResume, { loading, data }] =
    useResumeLazyQuery();

  const fileUrl =
    data?.mediaLink?.data?.attributes?.resume?.data
      ?.attributes?.url;

  if (loading) return <DocumentPlaceholder />;

  return (
    <Link href={fileUrl || ''} passHref>
      <CvBtnStyles
        download
        ref={cvRef}
        cvInView={cvInView}
        inView={inView}
        target='_blank'
        onClick={() => loadResume()}
      >
        CV
      </CvBtnStyles>
    </Link>
  );
};
