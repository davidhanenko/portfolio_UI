import { Name } from './name/Name';
import { About } from './about/About';
import { Stack } from './stack/Stack';

import { HomeStyles, HomeContainer } from './HomeStyles';

export const Home: React.FC = () => {
  return (
    <HomeStyles>
      <HomeContainer>
        <Name />
        <Stack />
        <About />
      </HomeContainer>
    </HomeStyles>
  );
};
