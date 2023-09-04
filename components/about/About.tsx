import { useAboutQuery } from '../../graphql/about/about.generated';

import {
  AboutContainer,
  AboutWrapper,
} from './AboutStyles';
import { AboutImage } from './image/AboutImage';
import { AboutStack } from './stack/AboutStack';
import { AboutText } from './text/AboutText';

const About: React.FC = () => {
  const { data, loading, error } = useAboutQuery();

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
    <AboutContainer id='about'>
      <AboutWrapper>
        <section className='text-stack'>
          {!loading && (
            <AboutText
              header={header!}
              paragraphs={paragraphs!}
            />
          )}
          {!!techs?.length ? (
            <AboutStack
              techs={techs}
              techsLearning={techsLearning!}
              inView={false}
            />
          ) : null}
        </section>
        <section className='img-cv'>
          {!!imgUrl && <AboutImage imgUrl={imgUrl!} />}
        </section>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
