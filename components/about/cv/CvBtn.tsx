import Link from 'next/link';
import { CvBtnStyles } from './CvBtnStyles';

export const CvBtn: React.FC = () => {
  return (
    <Link href='/resume' passHref>
      <CvBtnStyles target='_blank'>CV</CvBtnStyles>
    </Link>
  );
};
