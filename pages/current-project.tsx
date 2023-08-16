import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import {
  addApolloState,
  initializeApollo,
} from '../graphql/apollo';

import CurrentSingleProject from '../components/single-project/CurrentSingleProject';
import { CurrentSingleProjectDocument, CurrentSingleProjectQuery } from '../graphql/current-project/currentSingleProject.generated';

const CurrentSingleProjectPage: NextPage<
  CurrentSingleProjectQuery
> = ({ currentProject }) => {
  return (
    <>
      <Head>
        <title>David Hanenko | Current Project</title>
      </Head>
      <CurrentSingleProject
        currentProject={currentProject}
      />
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
    query: CurrentSingleProjectDocument,
  });

  return addApolloState(client, {
    props: {
      currentProject,
    },
  });
};

export default CurrentSingleProjectPage;
