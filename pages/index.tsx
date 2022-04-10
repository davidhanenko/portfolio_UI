import { GetServerSidePropsContext, NextPage } from 'next';
import {
  useProjectsQuery,
  ProjectsQuery,
  ProjectsDocument,
} from '../generated';
import {
  addApolloState,
  initializeApollo,
} from '../graphql/apollo';
import GlobalStyles from '../styles/GlobalStyles';

interface ProjectsDataProps {
  projects: ProjectsQuery;
}

const Home: NextPage<ProjectsDataProps> = ({
  projects,
}) => {
  const project = projects?.data[0].attributes;

  // const { data, loading, error } = useProjectsQuery();

  // if (loading) return <h4>Loading...</h4>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <GlobalStyles>
      <h1>Projects</h1>
      <h3>{project?.title}</h3>
      <h3>123</h3>
      <p>{project?.description}</p>
    </GlobalStyles>
  );
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const client = initializeApollo({
    headers: ctx?.req?.headers,
  });

  const {
    data: { projects },
  } = await client.query<ProjectsQuery>({
    query: ProjectsDocument,
  });

  return addApolloState(client, {
    props: {
      projects,
    },
  });
};

export default Home;
