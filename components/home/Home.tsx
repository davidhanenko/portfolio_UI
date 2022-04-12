import { HomeStyles, NameContainer } from './HomeStyles';
import { Name } from './name/Name';

export const Home = () => {
  return (
    <HomeStyles>
      <NameContainer>
        <Name />
      </NameContainer>
    </HomeStyles>
  );
};
