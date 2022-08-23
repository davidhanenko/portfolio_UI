import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { CvBtnStyles } from './CvBtnStyles';


export const CvBtn: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Link href='/resume' passHref>
      <CvBtnStyles
        ref={ref}
        inView={inView}
        target='_blank'
      >
        CV
      </CvBtnStyles>
    </Link>
  );
};
