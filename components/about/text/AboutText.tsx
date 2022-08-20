import Link from 'next/link';
import { Text } from './AboutTextStyles';

interface IAboutTextProps {
  header?: string;
  paragraphs: any[];
}

export const AboutText: React.FC<IAboutTextProps> = ({
  header,
  paragraphs,
}) => {
  return (
    <Text>
      <h2>{header}</h2>
      {paragraphs.map(p => (
        <p key={p.id}>{p.section}</p>
      ))}

      {/* <Link href='/resume'>
        <a target='_blank'> Resume</a>
      </Link> */}
    </Text>
  );
};
