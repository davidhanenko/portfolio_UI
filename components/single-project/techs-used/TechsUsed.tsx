import Image from 'next/image';
import { SingleProjectQuery } from '../../../graphql/projects/singleProject.generated';
import { TechsUsedStyles } from './TechsUsedStyles';

interface ITechsUsedProps {
  techs: SingleProjectQuery['project']['data']['attributes']['tech_used'];
}

type TechProps = {
  id: string;
  tech_logo: SingleProjectQuery['project']['data']['attributes']['tech_used'][0]['tech_logo'];
  tech_title: string;
};

const TechsUsed: React.FC<ITechsUsedProps> = ({
  techs,
}) => {
  return (
    <TechsUsedStyles>
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
              <p className='tech-title'>{ tech.tech_title}</p>
            </li>
          ))}
      </ul>
    </TechsUsedStyles>
  );
};

export default TechsUsed;
