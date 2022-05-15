import Image from 'next/image';
import { AboutStackStyles } from './AboutStackStyles';

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
    <Image
      src={tech?.tech_logo?.data?.attributes?.url}
      alt={tech?.tech_title || ''}
      width={45}
      height={45}
    />
  );
};

export const AboutStack: React.FC<IAboutStackProps> = ({
  stack1,
  stack2,
  stack3,
}) => {
  console.log(stack2, stack3);
  return (
    <AboutStackStyles>
      {stack1.map(tech => (
        <Stack key={tech.id} tech={tech} />
      ))}
      {stack2.map(tech => (
        <Stack key={tech.id} tech={tech} />
      ))}
      {stack3.map(tech => (
        <Stack key={tech.id} tech={tech} />
      ))}
    </AboutStackStyles>
  );
};
