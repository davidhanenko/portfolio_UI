import { Name } from './name/Name';
import { Greet } from './about/Greet';

import { HomeStyles, HomeContainer } from './HomeStyles';
import { Bg } from './bg/Bg';
import { IMainPageProps } from '../../pages';

interface IHomeProps {
  greetText: string;
}

export const Home: React.FC<IMainPageProps> = ({
  main,
}) => {
  const greetText = main?.data?.attributes?.greeting;

  return (
    <HomeStyles>
      <HomeContainer>
        <Bg />
        <Name />
        <Greet greetText={greetText} />
      </HomeContainer>
    </HomeStyles>
  );
};
