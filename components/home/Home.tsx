import { Name } from './name/Name';
import { Greet } from './greet/Greet';

import { HomeStyles, HomeContainer } from './HomeStyles';
import { Bg } from './bg/Bg';
import { MainQuery } from '../../graphql/main/main.generated';


export const Home: React.FC<MainQuery> = ( { main } ) => {

  const greetText = main?.data?.attributes?.greeting;
  const techImages = main?.data?.attributes?.tech;

  return (
    <HomeStyles>
      <HomeContainer>
        <Bg techImages={techImages!} />
        <Name />
        <Greet greetText={greetText!} />
      </HomeContainer>
    </HomeStyles>
  );
};
