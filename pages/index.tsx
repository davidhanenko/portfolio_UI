import { GetServerSidePropsContext, NextPage } from 'next';
import {
  addApolloState,
  initializeApollo,
} from '../graphql/apollo';
import styled from 'styled-components';

import {
  MainDocument,
  MainQuery,
  useMainQuery,
} from '../graphql/main/main.generated';

import Home from '../components/home/Home';
import About from '../components/about/About';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';
import { useScroll } from '../lib/useScroll';

type SnapScrollProps = {
  readonly scrollWithModal: boolean;
};

const SnapScrollWrapper = styled.div`
  scroll-snap-type: y mandatory;
  ${(props: SnapScrollProps) =>
    !props.scrollWithModal && `overflow-y: scroll`};
  height: 100vh;

  @media (max-width: 576px) {
    scroll-snap-type: none;
  }
  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const HomePage: NextPage<MainQuery> = ({
  main,
}: MainQuery) => {
  const { data, loading, error } = useMainQuery();

  const { scrollWithModal } = useScroll();

  if (loading) return <h4>Loading...</h4>;

  return (
    <SnapScrollWrapper scrollWithModal={scrollWithModal}>
      <Home main={main} />
      <About />
      <Projects />
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
