import { Stack } from './AboutStackStyles';

interface IAboutStackProps {
  techs: any[];
  techsLearning: any[];
}

export const AboutStack: React.FC<IAboutStackProps> = ({
  techs,
  techsLearning,
}) => {
  return (
    <Stack>
      <div>
        <h3>Experienced with</h3>
        {techs.map(tech => (
          <p className='tech-title' key={tech.id}>
            {tech.tech_title}
          </p>
        ))}
      </div>

      <hr />

      <div>
        <h3>Currently learning...</h3>
        {techsLearning.map(tech => (
          <p className='tech-l-title' key={tech.id}>
            {tech.tech_title}
          </p>
        ))}
      </div>
    </Stack>
  );
};
