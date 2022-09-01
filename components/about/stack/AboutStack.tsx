import { useInView } from 'react-intersection-observer';
import { PlaceholderWrapperStyles } from '../../shared/placeholder/PlaceholderWrapper';
import { TextPlLine } from '../../shared/placeholder/TextPlaceholder';
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
        {techsLearning !== undefined &&
          techsLearning !== null &&
          techsLearning.map(tech => (
            <p className='tech-l-title' key={tech.id}>
              {tech.tech_title}
            </p>
          ))}
      </div>
    </Stack>
  );
};

// tech stack section placeholder
export const AboutStackPlaceholder = () => {
  return (
    <PlaceholderWrapperStyles>
      <TextPlLine />
      <TextPlLine />
      <hr
        style={{
          color: '#fff',
          width: '90%',
          margin: '0 auto',
        }}
      />
      <TextPlLine />
      <TextPlLine />
    </PlaceholderWrapperStyles>
  );
};
