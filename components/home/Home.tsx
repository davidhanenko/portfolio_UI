import { Name } from './name/Name';
import { Greet } from './about/Greet';

import { HomeStyles, HomeContainer } from './HomeStyles';
import { Bg } from './bg/Bg';

export const Home: React.FC = () => {
  return (
    <HomeStyles>
      <HomeContainer>
        <Bg />
        <Name />
        <Greet />
      </HomeContainer>
    </HomeStyles>
  );
};
