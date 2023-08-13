import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import SingleProject from '../components/single-project/SingleProject';
import {
  addApolloState,
  initializeApollo,
} from '../graphql/apollo';
import {
  CurrentProjectDocument,
  CurrentProjectQuery,
} from '../graphql/current-project/current.generated';


const SingleProjectPage: NextPage<
  CurrentProjectQuery
> = () => {
  return (
    <>
      <Head>
        <title>David Hanenko | Current Project</title>
      </Head>
    </>
  );
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const client = initializeApollo({});

  const {
    data: { currentProject },
  } = await client.query({
    query: CurrentProjectDocument,
  });

  return addApolloState(client, {
    props: {
      currentProject,
    },
  });
};

export default SingleProjectPage;
