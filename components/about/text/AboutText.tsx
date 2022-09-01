import { useInView } from 'react-intersection-observer';
import { HeaderPlaceholder } from '../../shared/placeholder/HeaderPlaceholder';
import { PlaceholderWrapper } from '../../shared/placeholder/PlaceholderWrapper';
import { TextPlaceholder } from '../../shared/placeholder/TextPlaceholder';
import { Text } from './AboutTextStyles';

interface IAboutTextProps {
  header?: string;
  paragraphs: any[];
}

export const AboutText: React.FC<IAboutTextProps> = ({
  header,
  paragraphs,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Text ref={ref} inView={inView}>
      <h2>{header}</h2>
      {paragraphs &&
        paragraphs.map(p => <p key={p.id}>{p.section}</p>)}
    </Text>
  );
};

// text section placeholder
export const AboutTextPlaceholder = () => {
  return (
    <PlaceholderWrapper>
      <HeaderPlaceholder />
      <TextPlaceholder />
      <TextPlaceholder />
    </PlaceholderWrapper>
  );
};
