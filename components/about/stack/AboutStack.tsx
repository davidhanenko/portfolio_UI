import { useInView } from 'react-intersection-observer';
import { Stack } from './AboutStackStyles';

interface IAboutStackProps {
  techs: any[];
  techsLearning?: any[];
  inView: boolean;
}

export const AboutStack: React.FC<IAboutStackProps> = ({
  techs,
  techsLearning,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Stack ref={ref} inView={inView}>
      <div>
        <h3>Experienced with:</h3>
        {!!techs?.length
          ? techs.map(tech => (
              <p className='tech-title' key={tech.id}>
                {tech.tech_title}
              </p>
            ))
          : null}
      </div>

      <hr />

      <div className='learning'>
        <h3>Looking forward to improve:</h3>
        {!!techsLearning?.length
          ? techsLearning.map(tech => (
              <p className='tech-title-learn' key={tech.id}>
                {tech.tech_title}
              </p>
            ))
          : null}
      </div>
    </Stack>
  );
};
