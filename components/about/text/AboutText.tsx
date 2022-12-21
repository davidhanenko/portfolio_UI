import { useInView } from 'react-intersection-observer';
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
    threshold: 0.3,
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
