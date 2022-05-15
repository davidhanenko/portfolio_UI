import { AboutQuery } from '../../../graphql/about/about.generated';
import { AboutTextStyles } from './AboutTextStyles';

interface IAboutTextProps {
  header?: string;
  paragraphs: any[];
}

export const AboutText: React.FC<IAboutTextProps> = ({
  header,
  paragraphs,
}) => {
  return (
    <AboutTextStyles>
      <h2>{header}</h2>
      {paragraphs.map(p => (
        <p key={p.id}>{p.section}</p>
      ))}
    </AboutTextStyles>
  );
};
