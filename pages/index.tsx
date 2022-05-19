import { GetServerSidePropsContext, NextPage } from 'next';
import {
  addApolloState,
  initializeApollo,
} from '../graphql/apollo';

import { Parallax } from 'react-scroll-parallax';

import { Home } from '../components/home/Home';
import { About } from '../components/about/About';

import {
  MainDocument,
  MainQuery,
  useMainQuery,
} from '../graphql/main/main.generated';
import styled from 'styled-components';

export interface IMainPageProps {
  main: MainQuery;
}

const MainStyles = styled.div`
  scroll-snap-type: y mandatory;
  max-height: 100vh;
  overflow-y: scroll;
`;

const HomePage: NextPage<IMainPageProps> = ({
  main,
}: IMainPageProps) => {
  const { data, loading, error } = useMainQuery();

  if (loading) return <h4>Loading...</h4>;

  return (
    <MainStyles>
      <Home main={main} />
      <About />
      <About />
    </MainStyles>
  );
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const client = initializeApollo({
    headers: ctx?.req?.headers,
  });

  const {
    data: { main },
  } = await client.query<MainQuery>({
    query: MainDocument,
  });

  return addApolloState(client, {
    props: {
      main,
    },
  });
};

export default HomePage;
