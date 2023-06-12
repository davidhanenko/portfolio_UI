import Image from 'next/image';
import { SingleProjectQuery } from '../../../graphql/projects/singleProject.generated';
import { useInView } from 'react-intersection-observer';
import { TechsUsedStyles } from './TechsUsedStyles';
import MediaFooter from '../../shared/media/media-footer/MediaFooter';

interface ITechsUsedProps {
  techs: SingleProjectQuery['project']['data']['attributes']['tech_used'];
  inView: boolean;
}

type TechProps = {
  id: string;
  tech_logo: SingleProjectQuery['project']['data']['attributes']['tech_used'][0]['tech_logo'];
  tech_title: string;
};

const TechsUsed: React.FC<ITechsUsedProps> = ({
  techs,
}) => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  return (
    <TechsUsedStyles ref={ref}>
      <h3>Technologies used</h3>
      <ul className='techs-list'>
        {techs &&
          techs.map((tech: TechProps) => (
            <li key={tech.id} className='tech-item'>
              <Image
                src={tech?.tech_logo?.data?.attributes?.url}
                alt='tech logo'
                width={50}
                height={100}
                objectFit='scale-down'
              />
              <p className='tech-title'>
                {tech.tech_title}
              </p>
            </li>
          ))}
      </ul>
      <MediaFooter inView={inView} />
    </TechsUsedStyles>
  );
};

export default TechsUsed;
