import Image from 'next/image';
import {
  AboutStackStyles,
  StackStyles,
} from './AboutStackStyles';

interface IAboutStackProps {
  stack1: any[];
  stack2: any[];
  stack3: any[];
}

type StackProps = {
  tech: any;
};

const Stack: React.FC<StackProps> = ({ tech }) => {
  return (
    <StackStyles>
      <span className='stack-img'>
        <Image
          src={tech?.tech_logo?.data?.attributes?.url}
          alt={tech?.tech_title || ''}
          layout='fill'
          objectFit='scale-down'
        />
      </span>

      <span className='stack-title'>
        {tech?.tech_title}
      </span>
    </StackStyles>
  );
};

export const AboutStack: React.FC<IAboutStackProps> = ({
  stack1,
  stack2,
  stack3,
}) => {
  return (
    <AboutStackStyles>
      <div className='group1'>
        {stack1.map(tech => (
          <Stack key={tech.id} tech={tech} />
        ))}
      </div>
      <div className='group2'>
        {stack2.map(tech => (
          <Stack key={tech.id} tech={tech} />
        ))}
      </div>
      <div className='group3'>
        {stack3.map(tech => (
          <Stack key={tech.id} tech={tech} />
        ))}
      </div>
    </AboutStackStyles>
  );
};
