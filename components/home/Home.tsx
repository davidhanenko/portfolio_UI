import { Name } from './name/Name';
import { Greet } from './about/Greet';

import { HomeStyles, HomeContainer } from './HomeStyles';
import { Bg } from './bg/Bg';
import { IMainPageProps } from '../../pages';

export const Home: React.FC<IMainPageProps> = ({
  main,
}) => {
  const greetText = main?.data?.attributes?.greeting;
  const techImages = main?.data?.attributes?.techs;

  return (
    <HomeStyles>
      <HomeContainer>
        <Bg techImages={techImages} />
        <Name />
        <Greet greetText={greetText} />
      </HomeContainer>
    </HomeStyles>
  );
};
