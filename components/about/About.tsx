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
  
  if (loading) return <h4>Loading...</h4>;

  return (
    <AboutContainer>
      <AboutWrapper>
        <article className='img-stack'>
          <AboutText
            header={header!}
            paragraphs={paragraphs!}
          />
          <AboutStack />
        </article>
        <AboutImage imgUrl={imgUrl!} />
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
