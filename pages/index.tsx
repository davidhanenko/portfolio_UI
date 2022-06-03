import { GetServerSidePropsContext, NextPage } from 'next';
import {
  addApolloState,
  initializeApollo,
} from '../graphql/apollo';



import { Home } from '../components/home/Home';
import { About } from '../components/about/About';

import {
  MainDocument,
  MainQuery,
  useMainQuery,
} from '../graphql/main/main.generated';
import styled from 'styled-components';
import { Contact } from '../components/contact/Contact';

export interface IMainPageProps {
  main: MainQuery;
}

const SnapScrollWrapper = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;

  @media (max-width: 576px) {
    scroll-snap-type: y proximity;
  }
  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const HomePage: NextPage<IMainPageProps> = ({
  main,
}: IMainPageProps) => {
  const { data, loading, error } = useMainQuery();

  if (loading) return <h4>Loading...</h4>;

  return (
    <SnapScrollWrapper>
      <Home main={main} />
      <About />

      <Contact />
    </SnapScrollWrapper>
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
