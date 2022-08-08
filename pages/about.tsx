import { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/about/About';
import MediaFooter from '../components/media/media-footer/MediaFooter';

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>David Hanenko | About</title>
      </Head>
      <About />
      <MediaFooter />
    </>
  );
};

export default AboutPage;
