import { NextPage } from 'next';
import Head from 'next/head';
import Projects from '../components/projects/Projects';

const ProjectsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>David Hanenko | Projects</title>
      </Head>
      <Projects />
    </>
  );
};

export default ProjectsPage;
