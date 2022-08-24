import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { CvBtnStyles } from './CvBtnStyles';

export const CvBtn: React.FC = ({ inView }:any) => {
  const { ref: cvRef, inView: cvInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Link href='/resume' passHref>
      <CvBtnStyles
        ref={cvRef}
        cvInView={cvInView}
        inView={inView}
        target='_blank'
      >
        CV
      </CvBtnStyles>
    </Link>
  );
};
