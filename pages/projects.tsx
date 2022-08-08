import { NextPage } from 'next';
import Head from 'next/head';
import MediaFooter from '../components/media/media-footer/MediaFooter';
import Projects from '../components/projects/Projects';

const ProjectsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>David Hanenko | Projects</title>
      </Head>
      <Projects />
      <MediaFooter />
    </>
  );
};

export default ProjectsPage;
