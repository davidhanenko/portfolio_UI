import { useInView } from 'react-intersection-observer';

import { Name } from './name/Name';
import { Greet } from './greet/Greet';

import { HomeWrapper, HomeContainer } from './HomeStyles';
import { Bg } from './bg/Bg';
import { MainQuery } from '../../graphql/main/main.generated';

const Home: React.FC<MainQuery> = ({ main }) => {
  const greetText = main?.data?.attributes?.greeting;
  const techImages = main?.data?.attributes?.tech;

  const { ref: inViewRef, inView: bgInView } = useInView({
    threshold: 0.3,
  });

  return (
    <HomeContainer>
      <HomeWrapper ref={inViewRef}>
        <Bg techImages={techImages!} bgInView={bgInView} />
        <Name />
        <Greet
          greetText={greetText!}
          nameAnimationEnd={false}
        />
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;
