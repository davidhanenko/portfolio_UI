import { Name } from './name/Name';
import { About } from './about/About';
import { Stack } from './stack/Stack';

import { HomeStyles, HomeContainer } from './HomeStyles';
import { Bg } from './bg/Bg';

export const Home: React.FC = () => {
  return (
    <HomeStyles>
      <HomeContainer>
        <Bg/>
        <Name />
        {/* <Stack /> */}
        <About />
      </HomeContainer>
    </HomeStyles>
  );
};
