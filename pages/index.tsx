import { GetServerSidePropsContext, NextPage } from 'next';
import {
  addApolloState,
  initializeApollo,
} from '../graphql/apollo';

import { Home } from '../components/home/Home';
import {
  MainDocument,
  MainQuery,
  useMainQuery,
} from '../generated';

export interface IMainPageProps {
  main: MainQuery;
}

const HomePage: NextPage<IMainPageProps> = ({
  main,
}: IMainPageProps) => {
  const { data, loading, error } = useMainQuery();

  if (loading) return <h4>Loading...</h4>;

  return <Home main={main} />;
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
