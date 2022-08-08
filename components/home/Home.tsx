import { Name } from './name/Name';
import { Greet } from './greet/Greet';

import { HomeWrapper, HomeContainer } from './HomeStyles';
import { Bg } from './bg/Bg';
import { MainQuery } from '../../graphql/main/main.generated';

const Home: React.FC<MainQuery> = ({ main }) => {
  const greetText = main?.data?.attributes?.greeting;
  const techImages = main?.data?.attributes?.tech;

  return (
    <HomeContainer>
      <HomeWrapper>
        <Bg techImages={techImages!} />
        <Name />
        <Greet greetText={greetText!} nameAnimationEnd={false} />
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;
