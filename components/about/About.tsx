import { useInView } from 'react-intersection-observer';
import { useAboutQuery } from '../../graphql/about/about.generated';

import {
  AboutContainer,
  AboutWrapper,
} from './AboutStyles';
import { CvBtn } from './cv/CvBtn';
import { AboutImage } from './image/AboutImage';
import { AboutStack } from './stack/AboutStack';
import { AboutText } from './text/AboutText';

const About: React.FC = () => {
  const { data, loading, error } = useAboutQuery();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const imgUrl =
    data?.about?.data?.attributes?.img?.data?.attributes
      ?.url;
  const header = data?.about?.data?.attributes?.header;
  const paragraphs =
    data?.about?.data?.attributes?.text_section;
  const techs = data?.about?.data?.attributes?.tech;
  const techsLearning =
    data?.about?.data?.attributes?.tech_learning;

  return (
    <AboutContainer>
      <AboutWrapper ref={ref}>
        <section className='text-stack'>
          {!loading && (
            <AboutText
              header={header!}
              paragraphs={paragraphs!}
            />
          )}
          {techs && (
            <AboutStack
              techs={techs}
              techsLearning={techsLearning!}
              inView={false}
            />
          )}
        </section>
        <section className='img-cv'>
          {imgUrl && <AboutImage imgUrl={imgUrl!} />}
          {/* <CvBtn inView={inView} /> */}
        </section>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
