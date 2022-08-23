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
    threshold: 0.55,
    triggerOnce: true,
  });

  return (
    <Stack ref={ref} inView={inView}>
      <div>
        <h3>Experienced with</h3>
        {techs &&
          techs.map(tech => (
            <p className='tech-title' key={tech.id}>
              {tech.tech_title}
            </p>
          ))}
      </div>

      <hr />

      <div>
        <h3>Currently learning...</h3>
        {techsLearning &&
          techsLearning.map(tech => (
            <p className='tech-l-title' key={tech.id}>
              {tech.tech_title}
            </p>
          ))}
      </div>
    </Stack>
  );
};
