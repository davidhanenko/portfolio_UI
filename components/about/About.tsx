import { useAboutQuery } from '../../graphql/about/about.generated';
import { AboutStyles } from './AboutStyles';
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
  const stack1 =
    data?.about?.data?.attributes?.stack_tier_1;
  const stack2 =
    data?.about?.data?.attributes?.stack_tier_2;
  const stack3 =
    data?.about?.data?.attributes?.stack_tier_3;

  if (loading) return <h4>Loading...</h4>;

  return (
    <AboutStyles>
      <AboutText
        header={header!}
        paragraphs={paragraphs!}
      />
      <section className='img-stack'>
        <AboutImage imgUrl={imgUrl!} />
        <AboutStack
          stack1={stack1!}
          stack2={stack2!}
          stack3={stack3!}
        />
      </section>
    </AboutStyles>
  );
};

export default About;
